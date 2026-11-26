// SPDX-License-Identifier: MIT
// Funniest Sign on a Haunted Server Room Door
// Writes one original funny sign line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a sysadmin's oldest pain (a ticket nobody ever closes) given
// to the server room's ghost, so the sign warns visitors not to ask it for
// an ETA — the ghost is the bottleneck, and it is never going to fix it.
const SIGN =
  "WARNING: The ghost in this server room has never closed a ticket. Do not ask for an ETA.";

// The gate requires 1 to 120 characters of non-whitespace text: fail loudly
// instead of writing an entry the scorer would reject.
if (SIGN.length < 1 || SIGN.length > 120 || SIGN.trim().length === 0) {
  throw new Error(`Sign must be 1-120 characters, got ${SIGN.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SIGN + "\n", "utf8");
console.log(SIGN);
console.log(`Characters: ${SIGN.length}`);
