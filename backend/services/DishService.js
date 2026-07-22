import LocalDish from '../models/LocalDish.js';

export const DishService = {
  getDishesByDestination: async (destination) => {
    return await LocalDish.find({ destination });
  },
};

export default DishService;
