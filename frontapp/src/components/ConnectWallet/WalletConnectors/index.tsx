import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";
import Button from "../../Button";
import "./WalletConnectors.css";

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
    <div>
      <Button 
        onClick={onClick} 
        disabled={!ready}
        connector={{
              name: connector.name
          }}
        className={"btn-block shadow-lg rounded-3 border-0 mt-1 mb-1 text-center card-padding wallet-connectors"}
        />
    </div>
  );
}
