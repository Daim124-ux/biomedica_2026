import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Proszę wypełnić wszystkie pola.' }, { status: 400 });
    }

    // SMTP configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'kontakt@biomedica.net.pl',
      subject: `Nowa wiadomość od ${name} - Biomedica`,
      text: message,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00b09f;">Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Od:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Treść wiadomości:</strong></p>
          <div style="padding: 15px; background: #f9f9f9; border-radius: 5px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 20px;">
            Wiadomość wysłana z formularza kontaktowego na stronie biomedica.net.pl
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Nie udało się wysłać wiadomości. Proszę sprawdzić konfigurację SMTP w pliku .env.local lub spróbować ponownie później.' 
    }, { status: 500 });
  }
}
