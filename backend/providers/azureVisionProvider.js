/**
 * Azure AI Vision Provider Adapter
 */

export const azureVisionProvider = {
  analyzeImage: async (imageUrl) => {
    return {
      provider: 'azure',
      recognitionType: 'landmark',
      recognizedObject: 'Rashtrapati Niwas Estate',
      confidence: 0.94,
      description: 'Azure AI spatial detection matched heritage structure.',
      historicalInfo: {
        builtYear: 1888,
        architect: 'Henry Irwin',
        significance: 'Colonial heritage complex in North India.',
      },
      location: {
        name: 'Observatory Hill, Shimla',
        lat: 31.1048,
        lng: 77.1734,
      },
      nearbyPlaces: [],
      travelTips: [],
    };
  },
};

export default azureVisionProvider;
