export const CrowdPredictionService = {
  predictCrowdLevel: (timeOfDay = 'morning') => {
    if (timeOfDay.includes('morning') || timeOfDay.includes('AM')) {
      return 'very_low';
    }
    return 'low';
  },
};

export default CrowdPredictionService;
