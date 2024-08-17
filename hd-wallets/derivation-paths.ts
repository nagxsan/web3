import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";

// generate mnemonics
const mnemonics = generateMnemonic(128)

// generate seed phrase
const seedPhrase = mnemonicToSeedSync(mnemonics)

// generate multiple keypairs using derivation paths
for (var i = 0; i < 4; i += 1) {

  // specify the derivation path
  const derivationPath = `m/44'/501'/${i}'/0'`

  // generate the keypair seed from the derivation path and the seed
  const derivedSeed = derivePath(derivationPath, seedPhrase.toString('hex')).key

  // get the public private keypair
  const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
  const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58()

  console.log(`Address: ${i} ; Public key: ${publicKey}`)
}
