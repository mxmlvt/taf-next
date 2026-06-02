import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = 'maksymilianmazurkiewicz@gmail.com';

interface InquiryBody {
  products: { id: number | string; name: string }[];
  company: string;
  nip: string;
  email: string;
  volume: string;
  message: string;
  locale: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InquiryBody;
    const { products, company, nip, email, volume, message, locale } = body;

    // Validate required fields
    if (!company || !nip || !email || !volume) {
      return NextResponse.json({ status: 'validation_error' }, { status: 400 });
    }

    // Build product list string for the email
    const productNames = products.map((p) => p.name).join(', ');

    // Compose message
    const fullMessage = [
      `--- PRODUCT INQUIRY / ZAPYTANIE PRODUKTOWE ---`,
      ``,
      `${locale === 'en' ? 'Selected products' : 'Wybrane produkty'}: ${productNames || (locale === 'en' ? 'None' : 'Brak')}`,
      `${locale === 'en' ? 'Company' : 'Firma'}: ${company}`,
      `${locale === 'en' ? 'Tax ID' : 'NIP'}: ${nip}`,
      `Email: ${email}`,
      `${locale === 'en' ? 'Expected demand' : 'Przewidywane zapotrzebowanie'}: ${volume}`,
      message ? `\n${locale === 'en' ? 'Message' : 'Wiadomość'}:\n${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    // Send via Resend
    const { error } = await resend.emails.send({
      from: 'TAF Inquiry <onboarding@resend.dev>',
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `Product Inquiry: ${company} | TAF`,
      text: fullMessage,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ status: 'mail_failed' }, { status: 500 });
    }

    return NextResponse.json({ status: 'mail_sent' }, { status: 200 });
  } catch (err) {
    console.error('Product Inquiry API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
