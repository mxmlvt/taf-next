import { NextRequest, NextResponse } from 'next/server';

const CF7_URL = 'https://wp.trimsandfasteners.com/wp-json/contact-form-7/v1/contact-forms/1647/feedback';

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

    // Compose message for CF7
    const fullMessage = [
      `${locale === 'en' ? 'Selected products' : 'Wybrane produkty'}: ${productNames || (locale === 'en' ? 'None' : 'Brak')}`,
      `${locale === 'en' ? 'Company' : 'Firma'}: ${company}`,
      `${locale === 'en' ? 'Tax ID' : 'NIP'}: ${nip}`,
      `Email: ${email}`,
      `${locale === 'en' ? 'Expected volume' : 'Oczekiwany wolumen'}: ${volume}`,
      message ? `\n${locale === 'en' ? 'Message' : 'Wiadomość'}:\n${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    // Forward to CF7 (same pattern as /api/contact)
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

    const cf7Data = await cf7Res.json();
    return NextResponse.json(cf7Data, { status: cf7Res.ok ? 200 : 500 });
  } catch (err) {
    console.error('Product Inquiry API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
