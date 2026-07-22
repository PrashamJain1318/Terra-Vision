import MemoryExport from '../models/MemoryExport.js';

export const ExportService = {
  createExport: async (memoryId, format = 'pdf') => {
    const downloadUrl = `https://locallens.ai/downloads/capsule_${memoryId}.${format}`;
    return await MemoryExport.create({ memory: memoryId, format, status: 'completed', downloadUrl });
  },

  getExportById: async (exportId) => {
    return await MemoryExport.findById(exportId);
  },
};

export default ExportService;
