import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

declare let window: any;


const ConnectWallet = () => {

    const [disconnect, setDisconnect] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false)  /* New */
    const [error, setError] = useState(false)                /* New */
    const [errorMessage, setErrorMessage] = useState("")

    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialWallet = {accounts: [], chainId: "", balance: ""};
    const [wallet, setWallet] = useState(initialWallet);

    useEffect(() => {
        const refreshAccounts = async (accounts: any) => {
            if (accounts.length > 0) {
                await updateWallet(accounts);
            } else {
                setWallet(initialWallet);
            }
        }

        const getProvider = async () => {
            const provider = await detectEthereumProvider({silent: true});
            console.log("provider: " + provider);
            setHasProvider(Boolean(provider));
            if (!provider) return;

            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            await refreshAccounts(accounts);
            //window.ethereum.on("accountChanged", refreshAccounts); // listener
        }

        getProvider().catch((e: any) => {
            setError(true);
            setErrorMessage(e.message);
        })
        return () => {
            //window.ethereum?.removeListener("accountChanged", refreshAccounts);
        }
    }, []);

    const updateWallet = async (accounts: any) => {

        // request balance
        const balance = ethers.utils.formatEther(await window.ethereum!.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
        }))

        // request chainId
        const chainId = await window.ethereum!.request({
            method: "eth_chainId",
        })

        setWallet({accounts, balance, chainId})
    }

    async function handleDisconnect() {
        try {
            await window.ethereum.request({
                method: "wallet_revokePermissions",
                params: [
                    {eth_accounts: {}}
                ]
            })
            setDisconnect(true);
            console.log("try to disconnect");
        } catch (err: any) {
            setError(true);
            setErrorMessage(err.message);
            console.log(err.message);
        }
    }

    async function handleConnect() {
        try {
            setIsConnecting(true);

            // request accounts
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            await updateWallet(accounts);

            setIsConnecting(false);
        } catch (e: any) {
            setError(true);
            setErrorMessage(e.message);
        }
    }

    const disableConnect = Boolean(hasProvider) && isConnecting;

    if (hasProvider && wallet.accounts.length > 0) {
        return (
            <div>
                {
                    disconnect && (
                        <div>
                            <h1>Connect your wallet</h1>
                            <button className={!isConnecting ? "btn btn-primary" : "btn btn-outline-warning"}
                                    disabled={disableConnect}
                                    onClick={handleConnect}>Connect
                            </button>

                            {error && (
                                <div onClick={() => setError(false)}>
                                    <strong>Error:</strong> {errorMessage}
                                </div>
                            )}
                        </div>
                    )
                }
                {
                    !disconnect && (
                        <div>
                            <h1>Wallet Details</h1>
                            <h3>balance {wallet.balance}</h3>
                            <h3>chainId: {wallet.chainId ? parseInt(wallet.chainId) : ""}</h3>
                            <button className={!isConnecting ? "btn btn-primary" : "btn btn-outline-warning"}
                                    disabled={disableConnect}
                                    onClick={handleDisconnect}>Disconnect
                            </button>
                        </div>
                    )
                }
            </div>
        )
    } else if (hasProvider) {
        return (
            <div>
                <h1>Connect your wallet</h1>
                <button className={!isConnecting ? "btn btn-primary" : "btn btn-outline-warning"}
                        disabled={disableConnect}
                        onClick={handleConnect}>Connect
                </button>

                {error && (
                    <div onClick={() => setError(false)}>
                        <strong>Error:</strong> {errorMessage}
                    </div>
                )}

            </div>
        );
    } else {
        return (
            <div>
                <h1>Provider does not exist</h1>
            </div>
        )
    }

}

export default ConnectWallet;