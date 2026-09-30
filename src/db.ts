import mongoose from 'mongoose';
import { env } from './config/env.js';
let connection: Promise<typeof mongoose> | null = null;
export function connectDb() {
  if (mongoose.connection.readyState === 1) return Promise.resolve(mongoose);
  if (!connection) connection = mongoose.connect(env.MONGODB_URI);
  return connection;
}
