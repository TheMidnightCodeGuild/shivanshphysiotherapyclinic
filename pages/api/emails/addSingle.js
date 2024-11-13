// pages/api/emails/addSingle.js
import connectToDatabase from '@/lib/mongoose'; 
import Email from '@/models/Email';

export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      const newEmail = await Email.create({ email });
      res.status(201).json(newEmail);
    } catch (error) {
      res.status(400).json({ error: 'Error adding email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
