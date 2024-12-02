import connectToDatabase from "@/lib/mongoose";
import Booking from "@/models/Booking";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { date, timeSlot } = req.query;

    if (!date || !timeSlot) {
      return res.status(400).json({ error: 'Date and timeSlot parameters are required' });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Get all bookings for the specified date and time slot
    const bookings = await Booking.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay
      },
      timeSlot: timeSlot
    }).select('name email phone message'); // Only select necessary fields

    return res.status(200).json({ 
      success: true,
      bookings: bookings 
    });

  } catch (error) {
    console.error('Error fetching booking details:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Failed to fetch booking details' 
    });
  }
} 