#!/bin/bash
# based on http://superuser.com/a/498684
PRIVATE_KEY=${PRIVATE_KEY:-private.pem}
FILE_TO_SIGN=${1:-test.txt}
BINARY_SIGNATURE_FILE=signed.enc
BASE64_SIGNATURE_FILE="base64_${BINARY_SIGNATURE_FILE}"
set -x
openssl pkeyutl -sign -inkey "${PRIVATE_KEY}" -in "${FILE_TO_SIGN}" -out "${BINARY_SIGNATURE_FILE}"
openssl base64 -in ${BINARY_SIGNATURE_FILE} -out ${BASE64_SIGNATURE_FILE}
rm ${BINARY_SIGNATURE_FILE}
set +x
