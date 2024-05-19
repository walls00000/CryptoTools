
#!/bin/bash
# based on http://superuser.com/a/498684
PUBLIC_KEY=${PUBLIC_KEY:-public.pem}
FILE_TO_VERIFY=${1:-test.txt}
BINARY_SIGNATURE_FILE=signed.enc
BASE64_SIGNATURE_FILE="base64_${BINARY_SIGNATURE_FILE}"
set -x
openssl base64 -d -in ${BASE64_SIGNATURE_FILE} -out ${BINARY_SIGNATURE_FILE}
openssl pkeyutl -verify -pubin -inkey "${PUBLIC_KEY}" -in "${FILE_TO_VERIFY}" -sigfile "${BINARY_SIGNATURE_FILE}"
set +x
