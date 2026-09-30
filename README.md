# ConectIt v1.0.1 — Vercel-ready

ConectIt is PosterDrip's Shopify + Meta WhatsApp automation backend foundation.

## Fix for the Vercel error

If Vercel shows `No Output Directory named "public" found`, open **Project → Settings → Build and Deployment** and clear the **Output Directory** field. Do not set it to `public`. This project deploys through `api/index.ts` as a Vercel serverless function.

Recommended settings:
- Framework Preset: Other
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: **empty**

## Deploy

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Apply the settings above.
4. Add environment variables.
5. Deploy.

## Environment variables

```text
NODE_ENV=production
APP_URL=https://YOUR-DOMAIN.vercel.app
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
SHOPIFY_STORE_DOMAIN=posterdrip.myshopify.com
SHOPIFY_ADMIN_ACCESS_TOKEN=YOUR_SHOPIFY_TOKEN
SHOPIFY_API_VERSION=2026-07
META_GRAPH_API_VERSION=v24.0
META_ACCESS_TOKEN=YOUR_META_ACCESS_TOKEN
WABA_ID=YOUR_WABA_ID
WHATSAPP_PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID
WHATSAPP_VERIFY_TOKEN=CREATE_A_RANDOM_VERIFY_TOKEN
SHIPROCKET_EMAIL=YOUR_EMAIL
SHIPROCKET_PASSWORD=YOUR_PASSWORD
WEBHOOK_SECRET=CREATE_A_RANDOM_SECRET
```

Never commit `.env` or real tokens.

## Verify

Open `/` and `/health` on the deployed domain.

Expected root response:
```json
{"name":"ConectIt","version":"1.0.1","status":"running"}
```

## Shopify webhook

```text
https://YOUR-DOMAIN.vercel.app/webhooks/shopify
```

## Meta / WhatsApp webhook

Callback:
```text
https://YOUR-DOMAIN.vercel.app/webhooks/meta
```

Use the exact same `WHATSAPP_VERIFY_TOKEN` in Meta and Vercel.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

## Live rollout order

1. Deploy.
2. Test `/health`.
3. Confirm MongoDB connection.
4. Connect Shopify webhooks.
5. Verify Meta webhook.
6. Verify WhatsApp template delivery.
7. Enable order confirmations.
8. Enable shipping/tracking notifications.
9. Verify tracking.
10. Enable abandoned-cart recovery last.

## Scope

This release fixes the Vercel deployment architecture and provides the integration foundation. Production automation modules still to be completed include the job queue/worker, abandoned-checkout scheduler, Shiprocket integration, customer tracking page, admin dashboard, two-way WhatsApp intent handling, retries/dead-letter handling, and automation kill switches.
