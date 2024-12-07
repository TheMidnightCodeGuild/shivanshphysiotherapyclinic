import connectToDatabase from '@/lib/mongoose';
import Review from '../../../models/Review';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    
    const reviews = await Review.find({})
      .sort({ createdAt: -1 }); // Sort by newest first
    
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
}
