import mongoose from 'mongoose';

const communityFollowSchema = new mongoose.Schema(
  {
    followerId: { type: String, required: true, index: true },
    followingId: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

communityFollowSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

export const CommunityFollow = mongoose.models.CommunityFollow || mongoose.model('CommunityFollow', communityFollowSchema);
export default CommunityFollow;
