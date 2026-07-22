import { googleMapsEngineService } from '../services/googleMapsEngineService.js';
import SavedPlace from '../models/SavedPlace.js';

export const mapsController = {
  searchPlaces: async (req, res) => {
    try {
      const { city = 'Goa', category = 'All' } = req.query;
      const data = await googleMapsEngineService.searchCityPlaces(city, category);
      return res.status(200).json({ success: true, count: data.length, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to search places' });
    }
  },

  getPlaceDetails: async (req, res) => {
    try {
      const { placeId } = req.params;
      const data = await googleMapsEngineService.getPlaceDetails(placeId);
      return res.status(200).json({ success: true, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to fetch place details' });
    }
  },

  getHiddenGems: async (req, res) => {
    try {
      const { city = 'Goa' } = req.query;
      const data = await googleMapsEngineService.getHiddenGems(city);
      return res.status(200).json({ success: true, count: data.length, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to fetch hidden gems' });
    }
  },

  getRestaurants: async (req, res) => {
    try {
      const { city = 'Goa' } = req.query;
      const data = await googleMapsEngineService.getRestaurants(city);
      return res.status(200).json({ success: true, count: data.length, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to fetch restaurants' });
    }
  },

  getWeather: async (req, res) => {
    try {
      const { city = 'Goa' } = req.query;
      const data = await googleMapsEngineService.getCityWeather(city);
      return res.status(200).json({ success: true, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to fetch weather telemetry' });
    }
  },

  getRoute: async (req, res) => {
    try {
      const { origin = 'Calangute', destination = 'Baga Beach', mode = 'driving' } = req.query;
      const data = await googleMapsEngineService.calculateRoute(origin, destination, mode);
      return res.status(200).json({ success: true, data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to calculate route' });
    }
  },

  saveBookmark: async (req, res) => {
    try {
      const userId = req.user?.id || 'demo_user';
      const newPlace = await SavedPlace.create({ ...req.body, user: userId });
      return res.status(201).json({ success: true, data: newPlace });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to save bookmark' });
    }
  },

  deleteBookmark: async (req, res) => {
    try {
      const { id } = req.params;
      await SavedPlace.findByIdAndDelete(id);
      return res.status(200).json({ success: true, message: 'Bookmark removed successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Failed to delete bookmark' });
    }
  },
};

export default mapsController;
