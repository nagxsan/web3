"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const bip39_1 = require("bip39");
const ed25519_hd_key_1 = require("ed25519-hd-key");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
// generate mnemonics
const mnemonics = (0, bip39_1.generateMnemonic)(128);
// generate seed phrase
const seedPhrase = (0, bip39_1.mnemonicToSeedSync)(mnemonics);
// generate multiple keypairs using derivation paths
for (var i = 0; i < 4; i += 1) {
    // specify the derivation path
    const derivationPath = `m/44'/501'/${i}'/0'`;
    // generate the keypair seed from the derivation path and the seed
    const derivedSeed = (0, ed25519_hd_key_1.derivePath)(derivationPath, seedPhrase.toString('hex')).key;
    // get the public private keypair
    const secretKey = tweetnacl_1.default.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const publicKey = web3_js_1.Keypair.fromSecretKey(secretKey).publicKey.toBase58();
    console.log(`Address: ${i} ; Public key: ${publicKey}`);
}
