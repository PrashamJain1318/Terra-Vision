export interface VoiceProviderConfig {
  id: string;
  name: string;
  description: string;
  sttEngine: string;
  ttsEngine: string;
  isDefault?: boolean;
}

export const VOICE_PROVIDERS: VoiceProviderConfig[] = [
  {
    id: 'gemini-voice',
    name: 'Google Gemini Multimodal Live Voice',
    description: 'Ultra low-latency streaming speech reasoning and native acoustic perception',
    sttEngine: 'Gemini Audio Input Stream',
    ttsEngine: 'Gemini Neural Audio Synthesizer',
    isDefault: true,
  },
  {
    id: 'openai-realtime',
    name: 'OpenAI Realtime Voice API',
    description: 'GPT-4o realtime audio-to-audio conversational pipeline',
    sttEngine: 'Whisper v3 Turbo',
    ttsEngine: 'OpenAI Onyx / Alloy TTS',
  },
  {
    id: 'elevenlabs-claude',
    name: 'ElevenLabs + Anthropic Claude Voice',
    description: 'Claude 3.5 Sonnet reasoning with ElevenLabs ultra-realistic voice synthesis',
    sttEngine: 'Deepgram Nova-2 STT',
    ttsEngine: 'ElevenLabs Multilingual v2',
  },
];

export default VOICE_PROVIDERS;
