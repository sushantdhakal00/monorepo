# Threat Model v0

## Scope
System-wide assumptions that must never break.

## Context
- Actors: Shoppers (Users), Merchants, Router/Paymaster, Policy Engine, Smart-Contract Wallet (SCW), Liquidity Providers, Bridges.
- Assets: Session keys, MPC shards, SCW signer set, Paymaster budget, Attestations, Settlement receipts, Webhook secrets.
- Trust boundaries: Browser ↔ API, API ↔ Policy service, API ↔ Paymaster, Off-chain ↔ On-chain, Internal services ↔ Third-party providers.

## Invariants
- Platform never holds private keys.
- SCW enforces policy on-chain.
- Hot-path payments avoid third-party wrapped bridges.
- Every payment yields a verifiable attestation tied to on-chain facts.

## Threats & Controls
- Key exfiltration attempts → client-side MPC with Secure Enclave/TPM; encrypted cloud shard; zero plaintext at rest.
- Paymaster budget abuse → per-user/merchant budgets; sliding-window rate limits; anomaly scoring; emergency pause.
- Routing MEV and stale quote exploitation → MEV-safe submission; RFQ fills; slippage/time-decay guards.
- Session replay and origin spoofing → origin pinning, nonces, short TTL, revocation list; CSP/SRI.

## DFDs
- Context, container, and component diagrams tracked under docs/dfd/ (placeholders committed).

## Abuse Cases
- Key exfiltration attempts.
- Paymaster budget abuse.
- Routing MEV and stale quote exploitation.
- Session replay and origin spoofing.
