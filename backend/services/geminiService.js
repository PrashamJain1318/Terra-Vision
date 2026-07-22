import env from '../config/env.js';

export const geminiService = {
  /**
   * Universal text generation call to Gemini API with mock fallback if API key is missing
   */
  generateText: async (prompt, systemInstruction = '') => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_KEY;

    if (apiKey && apiKey !== 'mock_gemini_key' && !apiKey.startsWith('mock_')) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  ...(systemInstruction ? [{ text: `System context: ${systemInstruction}` }] : []),
                  { text: prompt }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }
      } catch (error) {
        console.warn('Gemini API request failed, falling back to local engine:', error.message);
      }
    }

    return null; // Return null so callers use fallback engines
  },

  /**
   * Multimodal vision analysis call to Gemini API
   */
  generateMultimodal: async (base64Image, mimeType = 'image/jpeg', prompt = '') => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_KEY;

    if (apiKey && apiKey !== 'mock_gemini_key' && !apiKey.startsWith('mock_')) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt || 'Analyze this image and detail all landmarks, food items, text, or objects found.' },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: base64Image
                    }
                  }
                ]
              }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }
      } catch (error) {
        console.warn('Gemini Vision API request failed:', error.message);
      }
    }

    return null;
  }
};

export default geminiService;
