#!/bin/bash
# based on http://superuser.com/a/498684
PRIVATE_KEY=${PRIVATE_KEY:-private.pem}
FILE_TO_SIGN=${1:-test.txt}
OUTPUT_SIGNATURE_FILE=signed.enc
set -x
openssl pkeyutl -sign -inkey "${PRIVATE_KEY}" -in "${FILE_TO_SIGN}" -out "${OUTPUT_SIGNATURE_FILE}"