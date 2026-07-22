export interface VisionProviderOption {
  id: string;
  name: string;
  type: 'gemini' | 'openai' | 'azure' | 'aws';
  supportsOCR: boolean;
}

export const visionProvidersConfig: VisionProviderOption[] = [
  { id: 'gemini_vision', name: 'Google Gemini 1.5 Pro Flash Vision', type: 'gemini', supportsOCR: true },
  { id: 'openai_vision', name: 'OpenAI GPT-4o Vision Engine', type: 'openai', supportsOCR: true },
  { id: 'azure_vision', name: 'Azure AI Spatial Vision', type: 'azure', supportsOCR: true },
  { id: 'aws_rekognition', name: 'AWS Rekognition Landmark Engine', type: 'aws', supportsOCR: false },
];

export default visionProvidersConfig;
