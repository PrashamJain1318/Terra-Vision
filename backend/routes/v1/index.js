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
import voiceRouter from '../voiceRoutes.js';
import communityRouter from '../communityRoutes.js';
import adminRouter from '../adminRoutes.js';
import securityRouter from '../securityRoutes.js';
import personalizationRouter from '../personalizationRoutes.js';
import ecosystemRouter from '../ecosystemRoutes.js';
import enterpriseRouter from '../enterpriseRoutes.js';
import platformRouter from '../platformRoutes.js';

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
router.use('/voice', voiceRouter);
router.use('/community', communityRouter);
router.use('/admin', adminRouter);
router.use('/security', securityRouter);
router.use('/personalization', personalizationRouter);
router.use('/ecosystem', ecosystemRouter);
router.use('/enterprise', enterpriseRouter);
router.use('/platform', platformRouter);

export default router;
