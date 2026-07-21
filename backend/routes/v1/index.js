import express from 'express';
import healthRouter from './health.js';

const router = express.Router();

// Mount all v1 features
router.use('/health', healthRouter);

export default router;
