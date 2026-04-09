import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body)
  const { eventName,email, name, link, date, time } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // using TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"PGAGI" <admin@pgagi.in>',
    to: email,
    subject: `Thank you for enrolling in ${eventName}`,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Event Enrollment Confirmation</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #F4F4F4; margin: 0; padding: 0; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; padding-bottom: 20px; }
    .header h1 { margin: 0; color: #333333; }
    .content { text-align: center; }
    .content p { font-size: 16px; color: #555555; }
    .details { font-size: 16px; color: #333333; margin: 10px 0; }
    .btn-container { text-align: center; margin: 20px 0; }
    .btn { display: inline-block; background-color: #FFFFFF; color: #000000; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: bold; border: 2px solid #000000; }
    .btn span { color: #000000; font-weight: bold; }
    .btn:hover { background-color: #f4f4f4; }
    .footer { text-align: center; padding-top: 20px; font-size: 12px; color: #999999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Event Enrollment Confirmation</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Thank you for enrolling in the event <strong>${eventName}</strong>. Here are the details of the event:</p>
      <div class="details">
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      </div>
      <div class="btn-container">
        <a href="${link}" class="btn"><span>Join the Event</span></a>
      </div>
      <p>We look forward to seeing you there!</p>
    </div>
    <div class="footer">
      <p>If you have any questions, feel free to contact us.</p>
    </div>
  </div>
</body>
</html>
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Enrollment confirmation sent successfully', info.messageId);
    return NextResponse.json({ message: 'Enrollment confirmation sent successfully' }, { status: 200 });
  } catch (err) {
    console.error('Failed to send enrollment confirmation', err);
    return NextResponse.json({ message: 'Failed to send enrollment confirmation. Please try again.' }, { status: 400 });
  }
}
