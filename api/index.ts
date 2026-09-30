import { app } from '../src/app.js';
import { connectDb } from '../src/db.js';

export default async function handler(req: any, res: any) {
  // Health endpoint should work without requiring MongoDB.
  const url = req.url || '';

  if (url.startsWith('/health') || url.startsWith('/api/health')) {
    return app(req, res);
  }

  // Connect to MongoDB only for routes that actually need the database.
  await connectDb();

  return app(req, res);
}