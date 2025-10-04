# Threat Model v0

## Scope
System-wide assumptions that must never break.

## Invariants
- Platform never holds private keys.
- SCW enforces policy on-chain.
- Hot-path payments avoid third-party wrapped bridges.
- Every payment yields a verifiable attestation tied to on-chain facts.

## DFDs
- Context, container, and component diagrams TBD.

## Abuse Cases
- Key exfiltration attempts.
- Paymaster budget abuse.
- Routing MEV and stale quote exploitation.
- Session replay and origin spoofing.
