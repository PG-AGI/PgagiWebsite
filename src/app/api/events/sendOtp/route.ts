import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req:Request) {
  const body = await req.json();
  console.log(body)
  const {email,otpCode} = body;
  const transporter = nodemailer.createTransport({
    service:'gmail',
    host: process.env.SMTP_HOST,
    port: 687, 
    secure: true, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"PGAGI" <no-reply@yourcompany.com>',
    to: email,
    subject: 'Your OTP Code',
    html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Your OTP Code</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #F4F4F4; margin: 0; padding: 0; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
          .header { text-align: center; padding-bottom: 20px; }
          .header h1 { margin: 0; color: #333333; }
          .content { text-align: center; }
          .content p { font-size: 16px; color: #555555; }
          .otp { display: inline-block; font-size: 24px; font-weight: bold; background-color: #F7F7F7; padding: 10px 20px; margin: 20px 0; border-radius: 4px; color: #333333; letter-spacing: 2px; }
          .footer { text-align: center; padding-top: 20px; font-size: 12px; color: #999999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Your OTP Code</h1>
          </div>
          <div class="content">
            <p>Hello,</p>
            <p>We received a request to verify your email address. Use the following OTP code to complete your sign-up process:</p>
            <div class="otp">${otpCode}</div>
            <p>This code is valid for the next 10 minutes.</p>
          </div>
          <div class="footer">
            <p>If you didn't request this, please ignore this email.</p>
          </div>
        </div>
      </body>
      </html>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully', info.messageId);
    return NextResponse.json({ message: 'OTP sent successfully' },{status:200});
  } catch (err) {
    console.error('Failed to send OTP', err);
    return NextResponse.json({ message: 'Failed to send OTP. Please try again.' },{status:400});
  }
}
