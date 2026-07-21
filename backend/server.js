import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Config & Validation
import env from './config/env.js';
import connectDB from './config/db.js';
import logger from './config/logger.js';

// Middlewares
import requestLogger from './middleware/requestLogger.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes
import apiRouter from './routes/index.js';

// Database connection
connectDB();

const app = express();

// Security and Logging Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Base Health Check & Dynamic API Router Mounting
app.use('/api', apiRouter);

// Fallbacks & Error Handlers
app.use(notFound);
app.use(errorHandler);

const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});
