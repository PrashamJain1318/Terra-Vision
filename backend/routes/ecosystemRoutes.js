import express from 'express';
import ecosystemController from '../controllers/ecosystemController.js';

const router = express.Router();

// Device Management Routes
router.get('/devices', ecosystemController.getDevices);
router.post('/devices/register', ecosystemController.registerDevice);
router.post('/sync', ecosystemController.triggerSync);

// Offline Travel Center Routes
router.get('/offline-packages', ecosystemController.getOfflinePackages);
router.post('/offline-packages/:id/download', ecosystemController.downloadPackage);

// Companion Endpoints (Widgets, Car Mode, Smartwatch)
router.get('/widgets', ecosystemController.getWidgetConfig);
router.get('/car-mode', ecosystemController.getCarModeData);
router.get('/smartwatch', ecosystemController.getSmartwatchData);

export default router;
