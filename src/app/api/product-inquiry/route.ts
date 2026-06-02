import { NextRequest, NextResponse } from 'next/server';

const CF7_URL = 'https://wp.trimsandfasteners.com/wp-json/contact-form-7/v1/contact-forms/1647/feedback';
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

    // Forward to CF7
    const cf7Res = await fetch(CF7_URL, {
      method: 'POST',
      body: new URLSearchParams({
        'your-name': company,
        'your-email': email,
        'your-company': company,
        'your-message': fullMessage,
        '_wpcf7_locale': locale,
      }),
    });

    // Also send direct notification via WP mail endpoint as backup
    fetch('https://wp.trimsandfasteners.com/wp-json/taf/v1/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: NOTIFY_EMAIL, subject: `Product Inquiry: ${company}`, body: fullMessage }),
    }).catch(() => { /* silent fallback */ });

    const cf7Data = await cf7Res.json();
    return NextResponse.json(cf7Data, { status: cf7Res.ok ? 200 : 500 });
  } catch (err) {
    console.error('Product Inquiry API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
