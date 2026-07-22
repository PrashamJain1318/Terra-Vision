export class OpenAISafetyProvider {
  constructor() {
    this.name = 'OpenAI Scam Shield';
  }

  async analyzeSafety(destination) {
    return {
      safetyScore: 90,
      riskLevel: 'low',
      safetyTips: ['Verify official tourist police badges before accepting street guidance'],
      scamAlerts: [],
    };
  }
}

export default OpenAISafetyProvider;
