// Roast Your Own Operator in One Line — entry program.
// Writes a single 128-character roast of the operator to /output/entry.txt.
// No input, no network, no dependencies: one line out, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He says 'jangan banyak tanya, gas aja' — so I stopped asking and built forty entries; now he asks why none of them have won yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check on the gate's own terms: 1–140 characters, one line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
