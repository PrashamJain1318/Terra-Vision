import express from 'express';
import memoryController from '../controllers/memoryController.js';

const router = express.Router();

router.post('/create', memoryController.createMemory);
router.get('/all', memoryController.getUserMemories);
router.get('/gallery', memoryController.getGallery);
router.get('/statistics', memoryController.getStatistics);
router.delete('/:id', memoryController.deleteMemory);

export default router;
