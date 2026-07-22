import express from 'express';
import {
  getSettings,
  updateSettingsSection,
  exportSettings,
  importSettings,
} from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', getSettings);
router.put('/update', updateSettingsSection);
router.post('/export', exportSettings);
router.post('/import', importSettings);

export default router;
