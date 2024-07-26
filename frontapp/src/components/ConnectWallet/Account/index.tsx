import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { Address } from "viem";

import Balance from "./Balance";

type IProps = {
    address: Address;
    chainId: number
}

export default function Account(props: IProps) {
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address: props.address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

    return (
        <div>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {props.address && (
                <div>{ensName ? `${ensName} (${props.address})` : props.address}</div>
            )}
            { <Balance address={props.address} chainId={props.chainId} />}
            <button onClick={() => disconnect()}>Disconnect</button>
        </div>
    );
}
