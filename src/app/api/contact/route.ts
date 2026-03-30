import { NextRequest, NextResponse } from 'next/server';

const CF7_URL = 'https://trimsandfasteners.com/wp-json/contact-form-7/v1/contact-forms/1647/feedback';
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

      // Require score >= 0.5 (0 = bot, 1 = human)
      if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
        return NextResponse.json({ status: 'spam' }, { status: 400 });
      }
    }

    // Forward to CF7
    const cf7Res = await fetch(CF7_URL, {
      method: 'POST',
      body: new URLSearchParams({
        'your-name': name,
        'your-email': email,
        'your-company': company,
        'your-message': message,
        '_wpcf7_locale': locale,
      }),
    });

    const cf7Data = await cf7Res.json();
    return NextResponse.json(cf7Data, { status: cf7Res.ok ? 200 : 500 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
