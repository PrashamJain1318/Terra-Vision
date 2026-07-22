import mongoose from 'mongoose';

const adminReportSchema = new mongoose.Schema(
  {
    reporterId: { type: String, required: true },
    contentType: { type: String, enum: ['post', 'comment', 'review', 'journal'], required: true },
    contentId: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['pending', 'resolved', 'dismissed'], default: 'pending' },
  },
  { timestamps: true }
);

export const AdminReport = mongoose.models.AdminReport || mongoose.model('AdminReport', adminReportSchema);
export default AdminReport;
