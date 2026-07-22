export const TravelerProfileService = {
  async getTravelerProfile(userId) {
    return {
      userId,
      name: 'Elena Rostova',
      handle: '@elena_explores',
      bio: 'Culture explorer, tea master student, and landscape photographer.',
      countriesVisited: 18,
      citiesVisited: 64,
      travelScore: 480,
      badges: ['Explorer', 'Photographer', 'Local Guide'],
      followersCount: 1240,
      followingCount: 380,
    };
  },
};

export default TravelerProfileService;
