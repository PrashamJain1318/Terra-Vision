import mongoose from 'mongoose';

const memoryExportSchema = new mongoose.Schema(
  {
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelMemory', required: true },
    format: { type: String, enum: ['pdf', 'scrapbook_json'], default: 'pdf' },
    status: { type: String, enum: ['pending', 'processing', 'completed', 'failed'], default: 'completed' },
    downloadUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.MemoryExport || mongoose.model('MemoryExport', memoryExportSchema);
