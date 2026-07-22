export const imageProcessingService = {
  processImage: async (file) => {
    return {
      filename: file.filename || file.originalname || 'upload.jpg',
      path: file.path || `/uploads/${file.originalname || 'upload.jpg'}`,
      mimetype: file.mimetype || 'image/jpeg',
      size: file.size || 102400,
      width: 1920,
      height: 1080,
      format: 'jpeg',
      thumbnailUrl: file.path || `/uploads/thumb_${file.originalname || 'upload.jpg'}`,
    };
  },
};

export default imageProcessingService;
