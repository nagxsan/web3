import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// generate the keypair
const keypair = Keypair.generate()

// get the public and private keys
const publicKey = keypair.publicKey
const secretKey = keypair.secretKey

// get the message
const message = new TextEncoder().encode("hello world")

// sign the message
const signature = nacl.sign.detached(message, secretKey)

// verify the signature
const isValid = nacl.sign.detached.verify(message, signature, publicKey.toBytes())

console.log(isValid)