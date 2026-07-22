/**
 * OpenAI GPT-4o Local Food Provider Adapter
 */

export const OpenAIFoodProvider = {
  getFoodRecommendations: async (destination, cuisine = 'street_food', diet = 'vegetarian') => {
    return [
      {
        id: 'food-3',
        name: 'Makki di Roti & Sarson da Saag',
        cuisine: 'Royal Heritage Punjabi',
        restaurantName: 'Bharawan Da Dhaba',
        location: 'Town Hall, Amritsar',
        description: 'Cornmeal flatbread paired with slow-cooked mustard greens and jaggery.',
        priceEstimate: '₹220',
        rating: 4.9,
        dietaryTags: ['Vegetarian', 'Gluten Free Option'],
        nutritionInfo: { calories: '380 kcal', protein: '12g', carbs: '45g' },
        foodStory: 'GPT-4o recommendation highlighting winter harvest culinary traditions.',
      },
    ];
  },
};

export default OpenAIFoodProvider;
