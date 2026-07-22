import express from 'express';
import healthRouter from './health.js';
import authRouter from '../authRoutes.js';
import landingRouter from '../landingRoutes.js';
import dashboardRouter from '../dashboardRoutes.js';
import visionRouter from '../visionRoutes.js';
import hiddenGemsRouter from '../hiddenGemsRoutes.js';
import foodRouter from '../foodRoutes.js';
import memoryRouter from '../memoryRoutes.js';
import safetyRouter from '../safetyRoutes.js';

const router = express.Router();

// Mount all v1 features
router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/landing', landingRouter);
router.use('/dashboard', dashboardRouter);
router.use('/vision', visionRouter);
router.use('/hidden-gems', hiddenGemsRouter);
router.use('/food', foodRouter);
router.use('/memory', memoryRouter);
router.use('/safety', safetyRouter);

export default router;
