// pages/api/emails/send.js
import nodemailer from 'nodemailer';
import Email from '@/models/Email';
import connectToDatabase from '@/lib/mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { subject, text } = req.body;
  if (!subject || !text) {
    return res.status(400).json({ error: 'Subject and text are required' });
  }

  await connectToDatabase();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const emails = await Email.find({ status: 'subscribed' });

  emails.forEach((email) => {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email.email,
      subject: subject,
      text: text,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });
  res.status(200).json({ message: 'Emails sent!' });
}
