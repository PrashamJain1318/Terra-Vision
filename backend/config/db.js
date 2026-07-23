import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

let mongoMemoryServer = null;

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/terravision';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`[MongoDB Atlas/Local] Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`[MongoDB Primary Connection Notice]: ${error.message}`);
    console.log(`[MongoDB Engine] Starting embedded in-memory database server...`);

    try {
      mongoMemoryServer = await MongoMemoryServer.create();
      const memoryUri = mongoMemoryServer.getUri();
      const conn = await mongoose.connect(memoryUri);
      console.log(`[MongoDB Embedded Database] Connected successfully: ${conn.connection.host}`);
      return conn;
    } catch (memErr) {
      console.error(`[MongoDB Fatal Error]: ${memErr.message}`);
    }
  }
};

export default connectDB;
