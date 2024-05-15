/**
 * Here the deprecated createCipher and createDecipher methods are used to
 * encrypt and decrypt.
 * The createCipher and createDecipher are deprecated because they allow
 * the use of a simple passphrase as the key, which is then hashed to
 * derive the actual key used for encryption and decryption. This can lead
 * to security issues because the hashing algorithm used (MD5 in this case)
 * is not designed for password storage and does not provide sufficient
 * security for this purpose.
 */
import crypto from "crypto";

export class CryptoDeprecated {
  encrypt(text: string, key: string): string {
    const cipher = crypto.createCipher("aes-256-cbc", key);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  decrypt(encryptedText: string, key: string): string {
    const decipher = crypto.createDecipher("aes-256-cbc", key);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}
