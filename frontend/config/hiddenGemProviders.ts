/**
 * Hidden Gems AI Provider Adapters Configuration
 */

export interface HiddenGemProviderConfig {
  id: 'gemini' | 'openai' | 'claude' | 'custom';
  name: string;
  description: string;
  isDefault: boolean;
  version: string;
}

export const HIDDEN_GEM_PROVIDERS: Record<string, HiddenGemProviderConfig> = {
  gemini: {
    id: 'gemini',
    name: 'Gemini AI Discovery',
    description: 'Google Gemini 1.5 Pro Flash experience recommendation engine',
    isDefault: true,
    version: '1.5-pro',
  },
  openai: {
    id: 'openai',
    name: 'OpenAI GPT-4o Discovery',
    description: 'OpenAI GPT-4o intelligent travel spot generator',
    isDefault: false,
    version: 'gpt-4o',
  },
  claude: {
    id: 'claude',
    name: 'Claude 3.5 Sonnet Discovery',
    description: 'Anthropic Claude cultural heritage discovery adapter',
    isDefault: false,
    version: '3.5-sonnet',
  },
};

export default HIDDEN_GEM_PROVIDERS;
