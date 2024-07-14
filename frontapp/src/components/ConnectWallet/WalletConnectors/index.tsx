import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";

export function WalletConnectors() {
    const { connectors, connect } = useConnect();

    return connectors.map((connector) => (
        <WalletConnector
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector })}
        />
    ));
}

function WalletConnector({
    connector,
    onClick,
}: {
    connector: Connector;
    onClick: () => void;
}) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
        })();
    }, [connector]);

    return (
        <button onClick={onClick} disabled={!ready}>
            {connector.name}
        </button>
    );
}
