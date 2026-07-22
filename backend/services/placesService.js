import providerFactory from '../providers/providerFactory.js';
import SavedPlace from '../models/SavedPlace.js';

export const placesService = {
  getNearbyPlaces: async (lat, lng, category = 'attraction', providerType = 'google') => {
    const provider = providerFactory.getProvider(providerType);
    return await provider.getNearby(parseFloat(lat), parseFloat(lng), category);
  },

  savePlace: async (userId, placeData) => {
    const record = await SavedPlace.create({
      user: userId,
      name: placeData.name,
      category: placeData.category || 'attraction',
      coordinates: placeData.coordinates || { lat: 31.1048, lng: 77.1734 },
      address: placeData.address || '',
      notes: placeData.notes || '',
      favorite: placeData.favorite || false,
    });
    return record;
  },

  getSavedPlaces: async (userId) => {
    return await SavedPlace.find({ user: userId }).sort({ createdAt: -1 });
  },

  updateSavedPlace: async (userId, id, updateData) => {
    return await SavedPlace.findOneAndUpdate({ _id: id, user: userId }, { $set: updateData }, { new: true });
  },

  deleteSavedPlace: async (userId, id) => {
    return await SavedPlace.deleteOne({ _id: id, user: userId });
  },
};

export default placesService;
