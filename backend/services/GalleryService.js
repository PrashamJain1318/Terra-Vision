import MemoryMedia from '../models/MemoryMedia.js';

export const GalleryService = {
  getGallery: async (memoryId) => {
    return await MemoryMedia.find({ memory: memoryId });
  },
};

export default GalleryService;
