import axios from 'axios'
import config from '../config'
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

(async () => {
  const url = `https://solana-devnet.g.alchemy.com/v2/${config.ALCHEMY_API_KEY}`

  const body = {
    id: 1,
    jsonrpc: '2.0',
    method: 'getBalance',
    params: [
      '7mWTXEwsmMVckM5AcPZ6GJw4ZEpx8qGw7mBiigkKCqHe'
    ]
  }

  const res = await axios.post(url, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })

  const data = await res.data

  console.log('SOL: ' + data.result.value / LAMPORTS_PER_SOL)

})()
