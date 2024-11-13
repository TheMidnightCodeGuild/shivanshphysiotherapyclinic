// pages/api/emails/addBulk.js
import connectToDatabase from '@/lib/mongoose';
import Email from '@/models/Email';

export default async function handler(req, res) {
  await connectToDatabase();
  
  if (req.method === 'POST') {
    const { emails } = req.body;
    try {
      const emailDocuments = emails.map(email => ({ email, status: 'subscribed' }));
      await Email.insertMany(emailDocuments);
      res.status(201).json({ message: 'Emails added successfully!' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to add emails' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
