import connectToDatabase from "@/lib/mongoose";
import Booking from "@/models/Booking";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Date parameter is required' });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Get all bookings for the specified date
    const bookings = await Booking.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    });

    // Count bookings per time slot
    const bookingsPerSlot = bookings.reduce((acc, booking) => {
      acc[booking.timeSlot] = (acc[booking.timeSlot] || 0) + 1;
      return acc;
    }, {});

    return res.status(200).json({ 
      success: true,
      data: bookingsPerSlot
    });

  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
}
