import express from 'express';
import healthRouter from './health.js';
import authRouter from '../authRoutes.js';
import landingRouter from '../landingRoutes.js';
import dashboardRouter from '../dashboardRoutes.js';

const router = express.Router();

// Mount all v1 features
router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/landing', landingRouter);
router.use('/dashboard', dashboardRouter);

export default router;
