import { Crypto48 } from "./crypto-options/crypto48";
import { CryptoDeprecated } from "./crypto-options/crypto-deprecated";
import { CryptoWithIV } from "./crypto-options/crypto-with-iv";

export class EncryptionService {
  private crypto: Crypto48;
  private cryptoD: CryptoDeprecated;
  private cryptoWithIV: CryptoWithIV;

  public constructor() {
    this.crypto = new Crypto48();
    this.cryptoD = new CryptoDeprecated();
    this.cryptoWithIV = new CryptoWithIV();
  }
  encrypt(text: string, key: string): string {
    console.log(`key: ${key}`);
    console.log(`text: ${text}`);
    let encrypted = undefined;

    // encrypted = this.cryptoD.encrypt(text, key);
    // encrypted = this.crypto.encrypt(text, key);
    // encrypted = this.cryptoWithIV.encrypt(text, key);

    console.log(`encrypted: ${encrypted}`);
    return encrypted ? encrypted : text;
  }

  decrypt(encryptedText: string, key: string): string {
    console.log(`key: ${key}`);
    console.log(`encryptedText: ${encryptedText}`);
    let decrypted = undefined;

    // decrypted = this.cryptoD.decrypt(encryptedText, key);
    // decrypted = this.crypto.decrypt(encryptedText, key);
    // decrypted = this.cryptoWithIV.decrypt(encryptedText, key);

    console.log(`decrypted: ${decrypted}`);
    return decrypted ? decrypted : encryptedText;
  }
}
