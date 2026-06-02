import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
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

    const textBody = [
      `--- CONTACT FORM / FORMULARZ KONTAKTOWY ---`,
      ``,
      `${locale === 'en' ? 'Name' : 'Imię'}: ${name}`,
      `Email: ${email}`,
      company ? `${locale === 'en' ? 'Company' : 'Firma'}: ${company}` : '',
      ``,
      `${locale === 'en' ? 'Message' : 'Wiadomość'}:`,
      message,
    ].filter(Boolean).join('\n');

    const { error } = await resend.emails.send({
      from: 'TAF Contact <onboarding@resend.dev>',
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `Contact: ${name} | TAF`,
      text: textBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ status: 'mail_failed' }, { status: 500 });
    }

    return NextResponse.json({ status: 'mail_sent' }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
