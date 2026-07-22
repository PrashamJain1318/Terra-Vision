import mongoose from 'mongoose';

const adminAuditLogSchema = new mongoose.Schema(
  {
    adminId: { type: String, required: true, index: true },
    adminRole: { type: String, required: true },
    action: { type: String, required: true },
    targetType: { type: String, required: true },
    targetId: { type: String },
    details: { type: String },
    ipAddress: { type: String, default: '127.0.0.1' },
  },
  { timestamps: true }
);

export const AdminAuditLog = mongoose.models.AdminAuditLog || mongoose.model('AdminAuditLog', adminAuditLogSchema);
export default AdminAuditLog;
