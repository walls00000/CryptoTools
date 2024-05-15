import express from "express";
import path from "path";
import { EncryptionService } from "./encryption-service";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const encryptionService = new EncryptionService();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/public`))); // Serve static files from the "public" directory

app.post("/encrypt", (req, res) => {
  const { text, key } = req.body;
  console.log(req.body);
  const encrypted = encryptionService.encrypt(text, key);
  res.json({ encrypted });
});

app.post("/decrypt", (req, res) => {
  const { encryptedText, key } = req.body;
  console.log(req.body);
  const decrypted = encryptionService.decrypt(encryptedText, key);
  res.json({ decrypted });
});

app.listen(3000, () => console.log("Server running on port 3000"));
