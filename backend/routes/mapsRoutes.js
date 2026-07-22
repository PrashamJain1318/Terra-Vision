import express from 'express';
import mapsController from '../controllers/mapsController.js';
import { validateRouteGeneration, validateNearbyQuery } from '../validators/mapsValidator.js';
import mapsRateLimiter from '../middleware/mapsRateLimiter.js';

const router = express.Router();

// Current location
router.get('/current-location', mapsController.getCurrentLocation);

// Search places
router.get('/search', mapsRateLimiter, mapsController.search);

// Place details & photos
router.get('/place/:placeId', mapsController.getPlaceById);
router.get('/photos/:id', mapsController.getPhotosById);

// Nearby places
router.get('/nearby', validateNearbyQuery, mapsController.getNearby);

// Route generation
router.post('/route', mapsRateLimiter, validateRouteGeneration, mapsController.generateRoute);

// Saved Places APIs
router.post('/save-place', mapsController.savePlace);
router.post('/saved', mapsController.savePlace);
router.get('/saved', mapsController.getSavedPlaces);
router.put('/saved/:id', mapsController.updateSavedPlace);
router.delete('/saved/:id', mapsController.deleteSavedPlace);

// Route History
router.get('/history', mapsController.getRouteHistory);

export default router;
