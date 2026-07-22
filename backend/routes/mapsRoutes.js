import express from 'express';
import mapsController from '../controllers/mapsController.js';

const router = express.Router();

// GET /api/v1/maps/search?city=Goa
router.get('/search', mapsController.searchPlaces);

// GET /api/v1/maps/place/:placeId
router.get('/place/:placeId', mapsController.getPlaceDetails);

// GET /api/v1/maps/hidden-gems?city=Goa
router.get('/hidden-gems', mapsController.getHiddenGems);

// GET /api/v1/maps/restaurants?city=Goa
router.get('/restaurants', mapsController.getRestaurants);

// GET /api/v1/maps/weather?city=Goa
router.get('/weather', mapsController.getWeather);

// GET /api/v1/maps/route?origin=...&destination=...&mode=...
router.get('/route', mapsController.getRoute);

// POST /api/v1/maps/bookmark
router.post('/bookmark', mapsController.saveBookmark);

// DELETE /api/v1/maps/bookmark/:id
router.delete('/bookmark/:id', mapsController.deleteBookmark);

// Backward compatibility alias for saved places
router.post('/saved', mapsController.saveBookmark);

export default router;
