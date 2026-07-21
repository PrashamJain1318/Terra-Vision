import express from 'express';
import v1Router from './v1/index.js';

const router = express.Router();

// Version API routing namespaces
router.use('/v1', v1Router);

export default router;
