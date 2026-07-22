/**
 * AWS Rekognition Provider Adapter
 */

export const awsRekognitionProvider = {
  analyzeImage: async (imageUrl) => {
    return {
      provider: 'aws',
      recognitionType: 'landmark',
      recognizedObject: 'Historical Lodge Shimla',
      confidence: 0.91,
      description: 'AWS Rekognition landmark label matched.',
      historicalInfo: {
        builtYear: 1888,
        architect: 'British Colonial',
        significance: 'Historic landmark.',
      },
      location: {
        name: 'Shimla HP',
        lat: 31.1048,
        lng: 77.1734,
      },
      nearbyPlaces: [],
      travelTips: [],
    };
  },
};

export default awsRekognitionProvider;
