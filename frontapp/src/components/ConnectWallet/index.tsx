import { getAccount } from '@wagmi/core'
import { config } from '../../config/wagmi-config'
import { useEffect, useState } from 'react'

export default function ConnectWallet(){
    const [addr, setAddr] = useState('');

    useEffect(() => {
        async function getAddress(){
            const { address } = getAccount(config)
            if (!address) return <h3>No address</h3>
            setAddr(address)
        }
        getAddress()
      
    }, [])
  
    return (
        <div>
            <p>Address: {addr}</p>
        </div>
    );
}