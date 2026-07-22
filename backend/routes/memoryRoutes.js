import express from 'express';
import memoryController from '../controllers/memoryController.js';
import { validateCreateMemory } from '../validators/memoryValidator.js';

const router = express.Router();

router.post('/create', validateCreateMemory, memoryController.createMemory);
router.post('/import', memoryController.importMemories);
router.post('/story', memoryController.generateStory);
router.get('/timeline', memoryController.getTimeline);
router.get('/gallery', memoryController.getGallery);
router.get('/statistics', memoryController.getStatistics);
router.post('/export', memoryController.exportMemory);
router.get('/export/:id', memoryController.getExportById);
router.post('/share', memoryController.shareMemory);
router.get('/shared/:token', memoryController.getSharedByToken);
router.get('/:id', memoryController.getMemoryById);
router.delete('/:id', memoryController.deleteMemory);

export default router;
