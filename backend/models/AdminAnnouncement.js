import mongoose from 'mongoose';

const adminAnnouncementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['broadcast', 'maintenance', 'system'], default: 'broadcast' },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const AdminAnnouncement = mongoose.models.AdminAnnouncement || mongoose.model('AdminAnnouncement', adminAnnouncementSchema);
export default AdminAnnouncement;
