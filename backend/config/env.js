import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = [
  'MONGO_URI',
  'JWT_SECRET',
  'GEMINI_API_KEY',
  'GOOGLE_MAPS_API_KEY',
];

const missingEnv = requiredEnv.filter((envVar) => !process.env[envVar]);

if (missingEnv.length > 0) {
  console.error('CRITICAL ENVIRONMENT ERROR: Missing required configuration variables:');
  missingEnv.forEach((envVar) => {
    console.error(` - ${envVar}`);
  });
  process.exit(1);
}

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export default env;
