import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { health } from './routes/health.js';
import { webhooks } from './routes/webhooks.js';

export const app = express();

// Security middleware
app.use((helmet as any)());

// CORS
app.use(cors());

// JSON body parser
app.use(express.json({ limit: '2mb' }));

// Health check
app.use('/health', health);

// Webhooks
app.use('/webhooks', webhooks);

// Root endpoint
app.get('/', (_req, res) => {
  res.json({
    name: 'ConectIt',
    version: '1.0.1',
    status: 'running'
  });
});