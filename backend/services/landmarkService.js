export const landmarkService = {
  getDetails: async (landmarkName) => {
    return {
      name: landmarkName,
      location: 'Observatory Hill, Shimla, HP, India',
      builtYear: 1888,
      architect: 'Henry Irwin',
      style: 'Jacobethan Revival Architecture',
      description: 'Historic viceregal residence converted to Indian Institute of Advanced Study.',
    };
  },
};

export default landmarkService;
