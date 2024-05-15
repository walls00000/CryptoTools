/**
 * Here the InitializationVector (iv) is combined with the key and passed in as
 * one long 48 byte key 
 */
import { createCipheriv, createDecipheriv } from "crypto";

type keyIv = { key: Buffer; iv: Buffer };

export class Crypto48 {
  private algorithm = "aes-256-cbc";

  public dissectKey48(key48: string): keyIv {
    if (!key48) {
      throw new Error(`key must be 48 byte hex encoded string`);
    }
    const bytes48 = Buffer.from(key48, "hex");
    if (bytes48.length !== 48) {
      throw new Error(
        `key must be 48 bytes hex encoded string. Provided key is ${bytes48.length}`,
      );
    }
    const key = bytes48.subarray(0, 32); // first 32 bytes
    const iv = bytes48.subarray(32, 48); // last 16 bytes
    return { key, iv };
  }

  public encrypt(text: string, key48: string): string {
    const keyiv = this.dissectKey48(key48);
    const key = keyiv.key;
    const iv = keyiv.iv;
    const cipher = createCipheriv(this.algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString("hex");
  }

  public decrypt(encrypted: string, key48: string): string {
    const keyiv = this.dissectKey48(key48);
    const key = keyiv.key;
    const iv = keyiv.iv;
    const encryptedText = Buffer.from(encrypted, "hex");
    const decipher = createDecipheriv(this.algorithm, Buffer.from(key), iv);
    const decrypted = decipher.update(encryptedText);
    const complete = Buffer.concat([decrypted, decipher.final()]);
    return complete.toString();
  }
}
