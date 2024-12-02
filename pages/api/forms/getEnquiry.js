import connectToDatabase from "@/lib/mongoose";
import Enquiry from "@/models/Enquiry";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .select("-__v"); // Exclude version key

    res.status(200).json(enquiries);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
