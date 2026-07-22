import mongoose from 'mongoose';

const communityReportSchema = new mongoose.Schema(
  {
    author: { type: String, default: 'Anonymous' },
    destination: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    votes: { type: Number, default: 1 },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.CommunityReport || mongoose.model('CommunityReport', communityReportSchema);
