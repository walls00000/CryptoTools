#!/bin/bash
PUBLIC_KEY=${PUBLIC_KEY:-public.pem}
FILE_TO_ENCRYPT=${1:-test.txt} 
ENCRYPTED_FILE=encrypted.enc
set -x
openssl pkeyutl -encrypt -pubin -inkey "${PUBLIC_KEY}" -in "${FILE_TO_ENCRYPT}" -out "${ENCRYPTED_FILE}"
set +x