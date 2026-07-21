import express from 'express';
import healthRouter from './health.js';
import authRouter from '../authRoutes.js';
import landingRouter from '../landingRoutes.js';

const router = express.Router();

// Mount all v1 features
router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/landing', landingRouter);

export default router;
