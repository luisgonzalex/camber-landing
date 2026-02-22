# Camber Landing MVP (v0.1)

Lean Next.js MVP for Camber Consulting:
- Landing page (`/`)
- 8-question Operational Clarity Audit (`/audit`)
- OpenAI-backed analysis API with strict JSON output (`/api/audit`)
- Results scorecard (`/results`)
- Lead email capture via Resend (`/api/lead`)

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- OpenAI API
- Resend
- Vercel-ready deployment

## Environment Variables
Copy `.env.example` to `.env.local` and set values:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional, default: `gpt-4o-mini`)
- `RESEND_API_KEY`
- `LEAD_INBOX_EMAIL`
- `FROM_EMAIL`
- `NEXT_PUBLIC_STRATEGY_CALL_URL` (optional)

## Local Run
```bash
npm install
npm run dev
```

## Build Check
```bash
npm run lint
npm run build
```

## Audit API Behavior
- Validates input with Zod (`8` answers required)
- Requests strict JSON from OpenAI via `response_format: json_schema`
- Parses and validates model output with Zod
- Retries up to `3` attempts on malformed/invalid output
- Logs token usage and latency to server logs

## Folder Highlights
- `app/page.tsx` landing page
- `app/audit/page.tsx` audit flow
- `app/results/page.tsx` scorecard results
- `app/api/audit/route.ts` AI analysis endpoint
- `app/api/lead/route.ts` email lead capture
- `lib/ai/prompt.ts` exact system prompt
- `lib/ai/schema.ts` strict input/output schemas

## Deploy (Vercel)
1. Connect repo to Vercel.
2. Add environment variables in project settings.
3. Deploy preview and validate:
   - Complete `/audit`
   - Confirm `/results` renders all sections
   - Submit email capture and verify inbox delivery
4. Promote to production.
