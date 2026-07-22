export const recommendationEngine = {
  /**
   * Generates proactive contextual recommendations based on user history, travel style, and environmental context
   */
  getProactiveRecommendations: (userContext = {}) => {
    const {
      recentPlaces = ['Munnar', 'Manali'],
      travelStyle = 'Nature & Adventure',
      isFamilyTrip = false,
      weatherAlert = 'rain',
      travelDNA = { adventure: 92, food: 84, nature: 95, luxury: 25, nightlife: 30, photography: 88 }
    } = userContext;

    const suggestions = [];

    // 1. Behavioral Recommendation ("Because you liked...")
    if (travelDNA.nature > 80 || recentPlaces.some(p => p.toLowerCase().includes('munnar'))) {
      suggestions.push({
        id: 'rec_1',
        type: 'behavioral',
        title: 'Because you liked mountain destinations...',
        recommendation: 'You may enjoy Coorg & Chikmagalur',
        reason: 'Coorg offers 95% match for your Nature & Coffee Estate preference.',
        badge: '98% DNA Match',
        destination: 'Coorg',
        actionLabel: 'Explore Coorg →'
      });
    }

    // 2. Family Context Recommendation
    if (isFamilyTrip || travelStyle.toLowerCase().includes('family')) {
      suggestions.push({
        id: 'rec_2',
        type: 'family',
        title: 'Traveling with Family',
        recommendation: 'Top Child-Friendly & Accessible Attractions in Goa',
        reason: 'Includes gentle beach coves, spice plantation tours, and science centers with high safety ratings.',
        badge: 'Family Approved',
        destination: 'Goa',
        actionLabel: 'View Family Spots →'
      });
    }

    // 3. Proactive Weather Context Recommendation ("Rain is expected tomorrow...")
    if (weatherAlert === 'rain') {
      suggestions.push({
        id: 'rec_3',
        type: 'weather',
        title: 'Rain expected tomorrow in Goa (85% chance)',
        recommendation: 'Curated Indoor Museum & Cafe Itinerary',
        reason: 'Swap open beach shacks for Houses of Goa Museum, artisan pottery workshops, and cozy tea bistros.',
        badge: 'Weather Adapted',
        destination: 'Goa',
        actionLabel: 'Switch to Indoor Plan →'
      });
    }

    // 4. Photography DNA Match
    if (travelDNA.photography > 80) {
      suggestions.push({
        id: 'rec_4',
        type: 'photography',
        title: 'Golden Hour Photography Opportunity',
        recommendation: 'Secret Cliffside Sunset Viewpoint',
        reason: 'Optimal lighting window today between 6:05 PM – 6:45 PM.',
        badge: '9.8 Photo Score',
        destination: 'Aguada Headland',
        actionLabel: 'View Photo Spot →'
      });
    }

    return suggestions;
  }
};

export default recommendationEngine;
