import connectToDatabase from "@/lib/mongoose";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      try {
        // Check if there are already 5 bookings for this time slot
        const { date, timeSlot } = req.body;
        
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const existingBookings = await Booking.countDocuments({
          date: {
            $gte: startOfDay,
            $lte: endOfDay
          },
          timeSlot: timeSlot
        });

        if (existingBookings >= 5) {
          return res.status(400).json({ error: 'This time slot is fully booked' });
        }

        // Create new booking
        const booking = await Booking.create(req.body);

        // Set up email transport
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        // Configure email content
        const mailOptions = {
          from: process.env.EMAIL,
          to: "mayanktilwankar2355@gmail.com",
          subject: `New Booking from ${booking.name}!`,
          text: `
            New booking details:
            Name: ${booking.name}
            Email: ${booking.email}
            Phone: ${booking.phone}
            Date: ${new Date(booking.date).toLocaleDateString()}
            Time Slot: ${booking.timeSlot}
            Message: ${booking.message || 'No message provided'}
          `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, data: booking });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else if (req.method === 'GET') {
      try {
        const { date } = req.query;
        
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        // Get bookings for the specified date
        const bookings = await Booking.find({
          date: {
            $gte: startOfDay,
            $lte: endOfDay
          }
        });

        // Count bookings per time slot
        const bookingsCount = bookings.reduce((acc, booking) => {
          acc[booking.timeSlot] = (acc[booking.timeSlot] || 0) + 1;
          return acc;
        }, {});

        res.status(200).json({ success: true, data: bookingsCount });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
}