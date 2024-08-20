"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"), "confirmed");
    const fromPubkey = web3_js_1.Keypair.generate();
    // Airdrop SOL for transferring lamports to the created account
    const airdropSignature = yield connection.requestAirdrop(fromPubkey.publicKey, web3_js_1.LAMPORTS_PER_SOL);
    yield connection.confirmTransaction(airdropSignature);
    // amount of space to reserve for the account
    const space = 0;
    // Seed the created account with lamports for rent exemption
    const rentExemptionAmount = yield connection.getMinimumBalanceForRentExemption(space);
    const newAccountPubkey = web3_js_1.Keypair.generate();
    console.log(newAccountPubkey.publicKey.toBase58());
    const createAccountParams = {
        fromPubkey: fromPubkey.publicKey,
        newAccountPubkey: newAccountPubkey.publicKey,
        lamports: rentExemptionAmount,
        space,
        programId: web3_js_1.SystemProgram.programId,
    };
    const createAccountTransaction = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount(createAccountParams));
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, createAccountTransaction, [
        fromPubkey,
        newAccountPubkey,
    ]);
}))();
