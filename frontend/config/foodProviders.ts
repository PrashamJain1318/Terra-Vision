/**
 * Local Food AI Model Providers Specification
 */

export interface FoodAIProvider {
  id: 'gemini' | 'openai' | 'claude';
  name: string;
  description: string;
  isDefault?: boolean;
}

export const FOOD_PROVIDERS: Record<string, FoodAIProvider> = {
  gemini: {
    id: 'gemini',
    name: 'Gemini 1.5 Culinary Engine',
    description: 'Multimodal local food & street delicacy recognition adapter.',
    isDefault: true,
  },
  openai: {
    id: 'openai',
    name: 'OpenAI GPT-4o Gourmet',
    description: 'Intelligent dish & restaurant recommendation adapter.',
  },
  claude: {
    id: 'claude',
    name: 'Claude 3.5 Heritage Food',
    description: 'Authentic regional recipe & culinary history adapter.',
  },
};

export default FOOD_PROVIDERS;
