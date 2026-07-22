import geminiVisionProvider from './geminiVisionProvider.js';
import openAIVisionProvider from './openAIVisionProvider.js';
import azureVisionProvider from './azureVisionProvider.js';
import awsRekognitionProvider from './awsRekognitionProvider.js';

export const visionProviderFactory = {
  getProvider: (providerType = 'gemini') => {
    switch (providerType.toLowerCase()) {
      case 'openai':
        return openAIVisionProvider;
      case 'azure':
        return azureVisionProvider;
      case 'aws':
      case 'rekognition':
        return awsRekognitionProvider;
      case 'gemini':
      default:
        return geminiVisionProvider;
    }
  },
};

export default visionProviderFactory;
