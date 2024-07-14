import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia, holesky, optimism } from '@wagmi/core/chains'
import {coinbaseWallet, metaMask} from "@wagmi/connectors"

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [holesky.id]: http(),
    [optimism.id]: http(), 
  },
  connectors: [coinbaseWallet(), metaMask()]
})

// SEND TRANSACTION

// const account = privateKeyToAccount('0x...')

// const hash = await sendTransaction({ 
//   account,
//   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
//   value: parseEther('0.001')
// })