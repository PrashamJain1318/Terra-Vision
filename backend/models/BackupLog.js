import mongoose from 'mongoose';

const backupLogSchema = new mongoose.Schema(
  {
    backupId: { type: String, required: true, unique: true },
    type: { type: String, enum: ['FULL', 'INCREMENTAL'], default: 'FULL' },
    status: { type: String, enum: ['SUCCESS', 'FAILED', 'IN_PROGRESS'], default: 'SUCCESS' },
    sizeBytes: { type: Number, default: 45000000 },
    storageUri: { type: String, required: true },
  },
  { timestamps: true }
);

export const BackupLog = mongoose.models.BackupLog || mongoose.model('BackupLog', backupLogSchema);
export default BackupLog;
