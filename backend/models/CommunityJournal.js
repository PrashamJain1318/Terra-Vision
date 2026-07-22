import mongoose from 'mongoose';

const communityJournalSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    destination: { type: String, required: true },
    summary: { type: String },
    contentMarkdown: { type: String, required: true },
    coverImage: { type: String },
    visitedDates: { type: String },
    viewsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const CommunityJournal = mongoose.models.CommunityJournal || mongoose.model('CommunityJournal', communityJournalSchema);
export default CommunityJournal;
