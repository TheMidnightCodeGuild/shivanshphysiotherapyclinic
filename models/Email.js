// models/Email.js
import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  addedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['subscribed', 'unsubscribed'], default: 'subscribed' },
});

export default mongoose.models.Email || mongoose.model('Email', emailSchema);
