import SOSRequest from '../models/SOSRequest.js';

export const SOSService = {
  triggerSOS: async (userId, destination = 'Amritsar, Punjab', latitude = 31.62, longitude = 74.87) => {
    return await SOSRequest.create({ user: userId, destination, latitude, longitude, status: 'active' });
  },
};

export default SOSService;
