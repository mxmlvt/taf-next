import { NextRequest, NextResponse } from 'next/server';

const MAIL_URL = 'https://wp.trimsandfasteners.com/wp-json/taf/v1/contact';
const NOTIFY_EMAIL = 'maksymilianmazurkiewicz@gmail.com';
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      company: string;
      message: string;
      locale: string;
      recaptchaToken?: string;
    };

    const { name, email, company, message, locale, recaptchaToken } = body;

    // Verify reCAPTCHA token if secret key is configured
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey && recaptchaToken) {
      const verifyRes = await fetch(RECAPTCHA_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }),
      });
      const verifyData = await verifyRes.json() as { success: boolean; score?: number; action?: string };

      if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
        return NextResponse.json({ status: 'spam' }, { status: 400 });
      }
    }

    const fullMessage = [
      `--- CONTACT FORM / FORMULARZ KONTAKTOWY ---`,
      ``,
      `${locale === 'en' ? 'Name' : 'Imię'}: ${name}`,
      `Email: ${email}`,
      company ? `${locale === 'en' ? 'Company' : 'Firma'}: ${company}` : '',
      ``,
      `${locale === 'en' ? 'Message' : 'Wiadomość'}:`,
      message,
    ].filter(Boolean).join('\n');

    // Send via WP mail endpoint
    const mailRes = await fetch(MAIL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: NOTIFY_EMAIL,
        subject: `Contact: ${name} | TAF`,
        body: fullMessage,
        replyTo: email,
      }),
    });

    const mailData = await mailRes.json();
    return NextResponse.json(mailData, { status: mailRes.ok ? 200 : 500 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
