import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from 'bip39'

// generate mnemonics
const seedWords = generateMnemonic(128)

// generate the root seed phrase from the mnemonics
const seedPhrase = mnemonicToSeedSync(seedWords)

console.log(seedPhrase)