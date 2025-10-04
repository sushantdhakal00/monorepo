---------------------------- MODULE TrustModel ----------------------------
EXTENDS Naturals, Sequences

(* --module invariant assumptions *)
CONSTANTS Users, Merchants, Payments

VARIABLES keysHeld, attested, routes, scwPolicies

Init ==
  /\ keysHeld = [ u \in Users |-> FALSE ]
  /\ attested = {}
  /\ routes = << >>
  /\ scwPolicies = [ u \in Users |-> TRUE ] \* TRUE means SCW policy validator approves per invariant sketch

NoPlatformKeys == \A u \in Users: keysHeld[u] = FALSE
AttestationPerPayment == \A p \in Payments: p \in attested
SCWPolicyEnforced == \A u \in Users: scwPolicies[u] = TRUE

Invariant == NoPlatformKeys /\ AttestationPerPayment /\ SCWPolicyEnforced

Next == UNCHANGED << keysHeld, attested, routes, scwPolicies >>

============================================================================
