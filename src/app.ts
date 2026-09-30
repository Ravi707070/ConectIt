import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { health } from './routes/health.js';
import { webhooks } from './routes/webhooks.js';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use('/health', health);
app.use('/webhooks', webhooks);
app.get('/', (_req, res) => res.json({ name: 'ConectIt', version: '1.0.1', status: 'running' }));
