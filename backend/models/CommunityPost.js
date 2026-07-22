import mongoose from 'mongoose';

const communityPostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    authorName: { type: String, required: true },
    authorHandle: { type: String, required: true },
    authorAvatar: { type: String },
    type: {
      type: String,
      enum: ['photo', 'story', 'journal', 'trip_plan', 'question', 'checkin', 'review'],
      default: 'story',
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    location: { type: String, default: 'Global' },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const CommunityPost = mongoose.models.CommunityPost || mongoose.model('CommunityPost', communityPostSchema);
export default CommunityPost;
