import express from 'express';
import * as authController from '../controllers/authController.js';
import { validate } from '../middleware/validationMiddleware.js';
import { registerValidator, loginValidator } from '../validators/authValidator.js';

const router = express.Router();

router.post('/register', validate(registerValidator), authController.register);
router.post('/login', validate(loginValidator), authController.login);
router.get('/refresh', authController.refresh);
router.post('/logout', authController.logout);

export default router;
