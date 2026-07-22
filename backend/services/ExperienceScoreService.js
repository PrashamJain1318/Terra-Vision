export const ExperienceScoreService = {
  calculateScore: (baseScore = 9.0, reviewsCount = 120, crowdLevel = 'very_low') => {
    let bonus = 0;
    if (crowdLevel === 'very_low') bonus += 0.5;
    if (crowdLevel === 'low') bonus += 0.3;
    const finalScore = Math.min(10, baseScore + bonus);
    return Math.round(finalScore * 10) / 10;
  },
};

export default ExperienceScoreService;
