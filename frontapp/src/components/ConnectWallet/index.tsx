import { getAccount } from '@wagmi/core'
import { config } from '../../config/wagmi-config'
import { useEffect, useState } from 'react'
import { useReadTokenFactoryGetTokenNumber, useReadTokenFactoryGetTokens, useReadTokenFactoryMe } from '../../WagmiGenerated';
import { WalletConnectors } from './WalletConnectors';
import Account from './Account';
import { useAccount } from 'wagmi';

export default function ConnectWallet(){
    const { data } = useReadTokenFactoryGetTokens();
    const { isConnected, address, status, chainId } = useAccount()
  

    if (isConnected) return (
        <div>
            <p>status: {status}</p>
            <p>address: {address}</p>
            <p>chainId: {chainId}</p>
            {address && chainId && <Account address={address} chainId={chainId} />}
        </div>

    );

    return (
            <div>
                otherwise
                <WalletConnectors />
            </div>
        );
}