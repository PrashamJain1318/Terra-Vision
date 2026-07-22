export interface MemoryAIProviderConfig {
  id: string;
  name: string;
  description: string;
  adapter: string;
}

export const MEMORY_AI_PROVIDERS: MemoryAIProviderConfig[] = [
  {
    id: 'gemini',
    name: 'Google Gemini 1.5 Pro',
    description: 'Multimodal story generation & visual memory layout AI',
    adapter: 'GeminiMemoryAdapter',
  },
  {
    id: 'openai',
    name: 'OpenAI GPT-4o',
    description: 'Gourmet travel narration & emotional storytelling engine',
    adapter: 'OpenAIMemoryAdapter',
  },
  {
    id: 'claude',
    name: 'Anthropic Claude 3.5 Sonnet',
    description: 'Ancestral cultural insights & literary travel log generator',
    adapter: 'ClaudeMemoryAdapter',
  },
];

export default MEMORY_AI_PROVIDERS;
