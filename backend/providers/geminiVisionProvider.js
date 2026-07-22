/**
 * Gemini Vision Provider Adapter
 */

export const geminiVisionProvider = {
  analyzeImage: async (imageUrl) => {
    return {
      provider: 'gemini',
      recognitionType: 'landmark',
      recognizedObject: 'Viceregal Lodge (Rashtrapati Niwas)',
      confidence: 0.98,
      description: 'Historical Jacobethan mansion located on Observatory Hill in Shimla.',
      historicalInfo: {
        builtYear: 1888,
        architect: 'Henry Irwin',
        significance: 'Former summer residence of the Viceroy of India; hosted the Shimla Conference of 1945.',
      },
      location: {
        name: 'Observatory Hill, Shimla, Himachal Pradesh, India',
        lat: 31.1048,
        lng: 77.1734,
      },
      nearbyPlaces: [
        { name: 'Bird Sanctuary Viewpoint', distance: '600 m' },
        { name: 'Summer Hill Railway Station', distance: '1.2 km' },
      ],
      travelTips: [
        'Visit between 10:00 AM and 5:00 PM for official guided tours.',
        'Photography inside the museum hall requires a special ticket.',
      ],
    };
  },
};

export default geminiVisionProvider;
