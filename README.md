# Payments Platform Monorepo

PnPM workspaces + Bazel + GitHub Actions. Day-1 scaffolding: repo layout, coding standards, CI, TLA+ invariants stub.

## Structure
- `apps/web` – Checkout modal + dashboard (Next.js).
- `services/api` – Payment Intent + Orchestration (NestJS/Fastify).
- `services/policy` – Policy engine (Rust).
- `packages/sdk` – Merchant/browser SDK (TypeScript).
- `packages/shared` – Shared types/schemas (Zod).
- `specs` – TLA+ invariants and configs.
- `docs` – Threat model and DFDs.

## Quickstart
```bash
pnpm i
pnpm -r build
pnpm -r test
```

## Commit policy
Conventional Commits enforced. Lint-staged on staged files. CI blocks on lint, build, tests, and TLA+ model checks.
