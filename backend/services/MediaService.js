import MemoryMedia from '../models/MemoryMedia.js';

export const MediaService = {
  addMedia: async (memoryId, mediaUrl, mediaType = 'image', caption = '') => {
    return await MemoryMedia.create({ memory: memoryId, mediaUrl, mediaType, caption });
  },
};

export default MediaService;
