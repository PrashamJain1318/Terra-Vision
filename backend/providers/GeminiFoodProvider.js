/**
 * Gemini Local Food Recommendation Provider Adapter
 */

export const GeminiFoodProvider = {
  getFoodRecommendations: async (destination, cuisine = 'street_food', diet = 'vegetarian') => {
    return [
      {
        id: 'food-1',
        name: 'Amritsari Kulcha & Chole',
        cuisine: 'Punjabi Heritage Food',
        restaurantName: 'Bhai Kulwant Singh Kulchian Wale',
        location: 'Near Golden Temple, Amritsar',
        description: 'Crispy tandoori stuffed bread cooked in clay oven served with spicy chickpeas.',
        priceEstimate: '₹120',
        rating: 4.9,
        dietaryTags: ['Vegetarian', 'Jain Option'],
        nutritionInfo: { calories: '420 kcal', protein: '14g', carbs: '58g' },
        foodStory: 'Baked in 100-year-old clay tandoors using traditional brass ghee pour techniques.',
      },
      {
        id: 'food-2',
        name: 'Aloo Paratha with White Butter',
        cuisine: 'Authentic Punjabi Breakfast',
        restaurantName: 'Kesar Da Dhaba',
        location: 'Chowk Passian, Amritsar',
        description: 'Pan-fried whole wheat paratha overflowing with homemade churned white butter.',
        priceEstimate: '₹150',
        rating: 4.8,
        dietaryTags: ['Vegetarian'],
        nutritionInfo: { calories: '510 kcal', protein: '11g', carbs: '64g' },
        foodStory: 'Established in 1916, Kesar Da Dhaba continues to slow-cook lentils and parathas over woodfires.',
      },
    ];
  },
};

export default GeminiFoodProvider;
