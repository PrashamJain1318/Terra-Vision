export interface SafetyProviderConfig {
  id: string;
  name: string;
  description: string;
  models: string[];
  isDefault?: boolean;
}

export const SAFETY_PROVIDERS: SafetyProviderConfig[] = [
  {
    id: 'gemini',
    name: 'Google Gemini Safety AI',
    description: 'Multimodal threat analysis, scam pattern detection & real-time risk scoring',
    models: ['gemini-1.5-pro', 'gemini-1.5-flash'],
    isDefault: true,
  },
  {
    id: 'openai',
    name: 'OpenAI Scam Shield',
    description: 'GPT-4o intelligence for scam taxonomy classification & emergency guidance',
    models: ['gpt-4o', 'gpt-4o-mini'],
  },
  {
    id: 'claude',
    name: 'Anthropic Claude Safety Agent',
    description: 'Claude 3.5 Sonnet for nuanced regional travel advisories & legal aid',
    models: ['claude-3-5-sonnet'],
  },
];

export default SAFETY_PROVIDERS;
