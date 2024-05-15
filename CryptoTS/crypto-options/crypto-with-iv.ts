/**
 * The Initialization Vector (IV) is used to ensure that identical plaintexts will encrypt to
 * different ciphertexts even when the same key is used. This is important for preventing
 * attackers from identifying patterns in the encrypted data, which could potentially reveal
 * information about the plaintext.
 */

import crypto from "crypto";

export class CryptoWithIV {
  encrypt(text: string, key: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      crypto.createHash("sha256").update(key).digest(),
      iv,
    );
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + ":" + encrypted;
  }

  decrypt(encryptedText: string, key: string) {
    const parts = encryptedText.split(":");
    const ivHex = parts.shift();
    if (!ivHex) {
      throw new Error("Invalid encrypted text");
    }
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = parts.join(":");
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      crypto.createHash("sha256").update(key).digest(),
      iv,
    );
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}
