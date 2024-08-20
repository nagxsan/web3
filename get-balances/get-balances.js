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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const web3_js_1 = require("@solana/web3.js");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://solana-devnet.g.alchemy.com/v2/${config_1.default.ALCHEMY_API_KEY}`;
    const body = {
        id: 1,
        jsonrpc: '2.0',
        method: 'getBalance',
        params: [
            '7mWTXEwsmMVckM5AcPZ6GJw4ZEpx8qGw7mBiigkKCqHe'
        ]
    };
    const res = yield axios_1.default.post(url, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    const data = yield res.data;
    console.log('SOL: ' + data.result.value / web3_js_1.LAMPORTS_PER_SOL);
}))();
