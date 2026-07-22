import SafetyAssessment from '../models/SafetyAssessment.js';
import safetyProviderFactory from '../providers/safetyProviderFactory.js';

export const SafetyAnalysisService = {
  analyzeDestination: async (userId, destination = 'Amritsar, Punjab', providerType = 'gemini') => {
    const provider = safetyProviderFactory.getProvider(providerType);
    const aiResult = await provider.analyzeSafety(destination);

    const assessment = await SafetyAssessment.create({
      user: userId,
      destination,
      safetyScore: aiResult.safetyScore,
      riskLevel: aiResult.riskLevel,
      safetyTips: aiResult.safetyTips,
    });

    return { assessment, scamAlerts: aiResult.scamAlerts };
  },
};

export default SafetyAnalysisService;
