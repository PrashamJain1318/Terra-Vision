export const SafetyScoreService = {
  calculateScore: (destination = 'Amritsar, Punjab') => {
    return {
      destination,
      safetyScore: 92,
      riskLevel: 'low',
      factors: { crimeIndex: 12, medicalInfrastructure: 'excellent', scamFrequency: 'low' },
    };
  },
};

export default SafetyScoreService;
