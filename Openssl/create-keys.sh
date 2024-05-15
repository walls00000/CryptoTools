name=${1:-""}
PRIVATE_KEY="private.pem"
PUBLIC_KEY="public.pem"
if [ -n "$name" ]; then
  PRIVATE_KEY="${name}_private.pem"
  PUBLIC_KEY="${name}_public.pem"
fi
set -x
openssl genrsa -aes128 -out ${PRIVATE_KEY} 1024
openssl rsa -in ${PRIVATE_KEY} -pubout > ${PUBLIC_KEY}
set +x