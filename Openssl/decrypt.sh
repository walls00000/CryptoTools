#!/bin/bash
PRIVATE_KEY=${PRIVATE_KEY:-private.pem}
ENCRYPTED_FILE=encrypted.enc
DECRYPTED_FILE=decrypted.txt
ORIGINAL_TO_COMPARE=${1:-test.txt}
rm $DECRYPTED_FILE
set -x
openssl pkeyutl -decrypt -inkey "${PRIVATE_KEY}" -in "${ENCRYPTED_FILE}" -out "${DECRYPTED_FILE}"
set +x
cmp $DECRYPTED_FILE $ORIGINAL_TO_COMPARE || echo 'Decrypted file ${DECRYPTED_FILE} does not match original'
cat $DECRYPTED_FILE
echo