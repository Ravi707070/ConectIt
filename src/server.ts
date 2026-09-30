import 'dotenv/config';
import { app } from './app.js';
import { env } from './config/env.js';
import { connectDb } from './db.js';
if (process.env.VERCEL !== '1') { await connectDb(); app.listen(env.PORT, () => console.log(`ConectIt listening on ${env.PORT}`)); }
export default app;
