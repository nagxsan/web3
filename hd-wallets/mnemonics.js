"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
// generate mnemonics
const seedWords = (0, bip39_1.generateMnemonic)(128);
// generate the root seed phrase from the mnemonics
const seedPhrase = (0, bip39_1.mnemonicToSeedSync)(seedWords);
console.log(seedPhrase);
