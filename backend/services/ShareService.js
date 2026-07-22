import MemoryShare from '../models/MemoryShare.js';
import crypto from 'crypto';

export const ShareService = {
  createShareLink: async (memoryId, isPasscodeProtected = false) => {
    const shareToken = crypto.randomBytes(12).toString('hex');
    return await MemoryShare.create({ memory: memoryId, shareToken, isPasscodeProtected });
  },

  getSharedMemoryByToken: async (shareToken) => {
    return await MemoryShare.findOne({ shareToken }).populate('memory');
  },
};

export default ShareService;
