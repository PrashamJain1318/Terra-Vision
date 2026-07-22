import mongoose from 'mongoose';

const communityGroupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    bannerImage: { type: String },
    creatorId: { type: String, required: true },
    membersCount: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const CommunityGroup = mongoose.models.CommunityGroup || mongoose.model('CommunityGroup', communityGroupSchema);
export default CommunityGroup;
