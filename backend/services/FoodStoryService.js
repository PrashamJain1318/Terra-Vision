export const FoodStoryService = {
  generateStory: (dishName, restaurantName, location) => {
    return `Prepared with ancestral recipes at ${restaurantName} in ${location}, ${dishName} carries over a century of local culinary pride.`;
  },
};

export default FoodStoryService;
