
#!/bin/bash
# based on http://superuser.com/a/498684
PUBLIC_KEY=${PUBLIC_KEY:-public.pem}
FILE_TO_VERIFY=${1:-test.txt}
SIGNATURE_FILE=signed.enc
set -x
openssl pkeyutl -verify -pubin -inkey "${PUBLIC_KEY}" -in "${FILE_TO_VERIFY}" -sigfile "${SIGNATURE_FILE}"
set -x