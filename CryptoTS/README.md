# CryptoTS: A typescript server implementation of the aes-256-cbc algorithm

This is an example of encryption using a the aes-256-cbc algorithm with a **symmetrical key**

AES-256-CBC is a cipher block chaining (CBC) mode that uses the Advanced Encryption Standard (AES) 256 algorithm to encrypt data. CBC mode XORs each block of plaintext with the previous ciphertext block before encryption, which ensures that ciphertext does not contain repeated patterns, even if the plaintext does. AES-256-CBC is often used to encrypt sensitive data like personal information and financial transactions because it is considered very secure. It is also widely supported, so it can be used with many systems and devices

## Components

`index.ts`: the entry point to the project and defines the service.  The service listens on the local machine on port 3000, and defines two REST endpoints
1. POST http://0.0.0.0/encrypt
2. POST http://0.0.0.0/decrypt

The actual url can be obtained using the `Networking` tab in the right pane when the service is running

`encryption-service.ts`: the encryption service used to encrypt and decrypt messages.  **`This requires editing to enable the desired the aes-256-cbc implementation from the crypto-options folder`**.  Enable one of the crypto-options (see crypto-options below) for both encryption and decryption.

`key-generator.js`: a javascript random cryptographic key generator

### crypto-options
`crypto-options`: a folder containing the various crypto implementations of the aes-256-cbc algorithm

`crypto-deprecated.ts`: a deprecated implementation of the aes-256-cbc. This implementation requires any text to use as the key and is the least secure

`crypto48.ts`: an implementation of the aes-256-cbc that combines the 32 byte (256 bit) key and 16 byte initialization vector (iv) into one 48 byte key

`crypto-with-iv.ts`: an implementation of the aes-256-cbc that uses a 32 byte (256 bit) key and the initialization vector prepended to the beginning of the encrypted text

## build
To install the project
```
npm install
```

To build the project
```
npm run build
```
## Run the service
To run the service click the `>Run` button at the top

A static form from the public/index.html will be served at the `/index.html` or `/` endpoint.  To access this form in the service, navigate to the `Webview` tab

## Using the html form
**encrypt:**

1. Fill out the form with an appropriate `key` for the crypto implementation
2. Type a message the `text` field
3. press the `encrypt` button and the encrypted string will appear in the result field

**decrypt**
1. Fill out the form with an appropriate `key` for the crypto implementation
2. paste an encrypted string the `text` field
3. press the `deccrypt` button and the decrypted string will appear in the result field

**To stop the service, click the `stop` button at the top**

## To generate a key
**A generated key must be used for the `crypto48` and `crypto-with-iv` implementations. The `crypto-deprecated` implementation can use any string as a key**

Run the following in the `Shell` terminal
```
npm run generate-key
```
Two types of keys will be printed:
1. a 48 bytes long key (32 byte key + 16 byte iv) for use with the crypto48 implementation
2. a 32 bytes long key for use with the crypto-with-iv implementation


