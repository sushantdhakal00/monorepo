---------------------------- MODULE TrustModel ----------------------------
EXTENDS Naturals, Sequences

(* --module invariant assumptions *)
CONSTANTS Users, Merchants, Payments

VARIABLES keysHeld, attested, routes

Init ==
  /\ keysHeld = [ u \in Users |-> FALSE ]
  /\ attested = {}
  /\ routes = << >>

NoPlatformKeys == \A u \in Users: keysHeld[u] = FALSE
AttestationPerPayment == \A p \in Payments: p \in attested

Invariant == NoPlatformKeys /\ AttestationPerPayment

Next == UNCHANGED << keysHeld, attested, routes >>

============================================================================
