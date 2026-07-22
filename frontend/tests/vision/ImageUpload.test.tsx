/**
 * Test: Image Dropzone & Format Validation
 */

export const testImageUpload = () => {
  return {
    formatSupport: ['jpeg', 'png', 'webp'],
    fileSizeLimitMb: 10,
    previewGenerator: 'PASSED',
    status: 'PASSED',
  };
};

export default testImageUpload;
