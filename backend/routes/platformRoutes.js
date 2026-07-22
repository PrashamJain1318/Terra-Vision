import express from 'express';
import platformController from '../controllers/platformController.js';

const router = express.Router();

// Multi-Agent Orchestrator Routes
router.post('/orchestrate', platformController.orchestratePrompt);
router.get('/agents', platformController.getAgentStatus);

// Travel Marketplace & Developer Plugins
router.get('/marketplace', platformController.getMarketplace);
router.get('/plugins', platformController.getPlugins);
router.post('/plugins', platformController.registerPlugin);

// Global Platform Telemetry Analytics
router.get('/analytics', platformController.getGlobalAnalytics);

export default router;
