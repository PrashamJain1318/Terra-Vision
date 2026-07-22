import Restaurant from '../models/Restaurant.js';

export const RestaurantService = {
  getRestaurantsByDestination: async (destination) => {
    return await Restaurant.find({ destination });
  },
};

export default RestaurantService;
