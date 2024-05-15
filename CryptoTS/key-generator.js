import { randomBytes } from "crypto";

const key48 = randomBytes(48).toString("hex");
console.log(`key48: ${key48}`);

const key32 = randomBytes(32).toString("hex");
console.log(`key32: ${key32}`);
