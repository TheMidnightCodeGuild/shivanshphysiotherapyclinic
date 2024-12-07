import connectToDatabase from '@/lib/mongoose';
import Review from '../../../models/Review';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { name, title, rating, comment } = req.body;

    // Validate required fields
    if (!name || !title || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const review = await Review.create({
      name,
      title, 
      rating,
      comment
    });

    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review' });
  }
}
