export class GeminiSafetyProvider {
  constructor() {
    this.name = 'Google Gemini Safety AI';
  }

  async analyzeSafety(destination) {
    return {
      safetyScore: 92,
      riskLevel: 'low',
      safetyTips: [
        'Keep wallet in front pockets while navigating crowded Heritage Walk',
        'Use pre-paid taxi booths at Amritsar Railway Station',
      ],
      scamAlerts: [
        {
          id: 'scam-1',
          type: 'scam_taxi',
          title: 'Overcharging Meter Scam',
          description: 'Drivers refusing digital meter rates during late hours.',
          severity: 'high',
          location: 'Amritsar Rail Station',
        },
      ],
    };
  }
}

export default GeminiSafetyProvider;
