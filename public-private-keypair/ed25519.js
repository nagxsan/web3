import * as ed from '@noble/ed25519'

async function main() {
  // generate public-private key pair
  const privateKey = ed.utils.randomPrivateKey()
  const publicKey = await ed.getPublicKeyAsync(privateKey)

  // Create a message and convert it into a uint8 array
  const message = "hello world"
  const encodedMessage = new TextEncoder().encode(message)

  // Sign the message with the private key
  const signature = await ed.signAsync(encodedMessage, privateKey)

  // Validate the message with the public key
  const isValid = await ed.verifyAsync(signature, encodedMessage, publicKey)

  console.log(isValid)
}

main()