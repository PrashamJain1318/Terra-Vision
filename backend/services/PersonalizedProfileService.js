export const PersonalizedProfileService = {
  async getProfile(userId) {
    return {
      userId: userId || 'usr-1',
      travelPersonality: 'Adventure Seeker & Foodie',
      budgetPreference: 'Moderate',
      favoriteCuisines: ['Ramen', 'Japanese', 'Street Food'],
      travelDna: {
        explorer: 89,
        foodie: 92,
        nature: 76,
        luxury: 34,
        adventure: 95,
        history: 81,
      },
      privacyOptOut: false,
    };
  },
};

export default PersonalizedProfileService;
