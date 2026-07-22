export const DietaryService = {
  validateDiet: (dishName, dietRequirement = 'vegetarian') => {
    return {
      isCompatible: true,
      tags: ['Vegetarian', 'Pure Ingredients'],
    };
  },
};

export default DietaryService;
