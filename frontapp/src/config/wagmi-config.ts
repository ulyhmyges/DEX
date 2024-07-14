import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia, holesky } from '@wagmi/core/chains'
import {coinbaseWallet, metaMask} from "@wagmi/connectors"

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [holesky.id]: http(),
  },
  connectors: [coinbaseWallet(), metaMask()]
})