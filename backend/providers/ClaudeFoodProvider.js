/**
 * Anthropic Claude Local Food Provider Adapter
 */

export const ClaudeFoodProvider = {
  getFoodRecommendations: async (destination, cuisine = 'street_food', diet = 'vegetarian') => {
    return [
      {
        id: 'food-4',
        name: 'Firni in Earthen Sakora',
        cuisine: 'Traditional Desserts',
        restaurantName: 'Ahuja Milk Bhandar',
        location: 'Lawrence Road, Amritsar',
        description: 'Chilled ground rice pudding flavored with saffron, cardamom, and silver leaf.',
        priceEstimate: '₹80',
        rating: 4.9,
        dietaryTags: ['Vegetarian', 'Gluten Free'],
        nutritionInfo: { calories: '240 kcal', protein: '6g', carbs: '32g' },
        foodStory: 'Claude recommendation emphasizing ancestral earthen pottery serving history.',
      },
    ];
  },
};

export default ClaudeFoodProvider;
