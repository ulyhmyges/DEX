import { getAccount } from '@wagmi/core'
import { config } from '../../config/wagmi-config'
import { useEffect, useState } from 'react'

export default function ConnectWallet(){
    const [addr, setAddr] = useState('');
    const [chain, setChain] = useState<any>();

    useEffect(() => {
        async function getAddress(){
            const { address, status } = getAccount(config)
            if (!address) return <h3>No address</h3>
            setAddr(address)
            setChain(status)
        }
        getAddress()
      
    }, [])
  
    return (
        addr ? ( <div>
            <p>Address: {addr}</p>
            <p>chain: {chain}</p>
        </div>) : (
            <div>
                otherwise
                {/* <WalletConnectors /> */}
            </div>
        )
    );
}