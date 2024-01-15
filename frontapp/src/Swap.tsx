import React, {SyntheticEvent, useState} from "react";

const Swap = () => {
    const [fromAmount, setFromAmount] = useState("0");
    const [toAmount, setToAmount] = useState("");
    const [fromCoin, setFromCoin] = useState("eth");
    const [toCoin, setToCoin] = useState("btc");

    const handleFormInput = (event: SyntheticEvent<HTMLInputElement>) => {
        setFromAmount(event.currentTarget.value);
        setToAmount(String(parseFloat(fromAmount)*10));
    }
    const handleCoinSelect = (event: SyntheticEvent<HTMLSelectElement>) => {
        setFromCoin(event.currentTarget.value);
    }

    return (
        <div className="App">
            <div className="container mt-5">
                <h1 className="mb-4">Swap</h1>
                <form>
                    <div className={"input-group flex-nowrap mb-3"}>
                        <span className={"input-group-text"} >From</span>
                        <input className={"form-control"} id={"swapfrom"} value={fromAmount} onChange={handleFormInput}/>
                        <select className="form-select btn btn-light" aria-label="Default select example" value={fromCoin} onChange={handleCoinSelect}>
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="coin">Coin</option>
                        </select>
                    </div>
                    <div className={"input-group flex-nowrap mb-3"}>
                        <span className={"input-group-text"}>To</span>
                        <input className={"form-control"} id={"swapto"} value={toAmount} />
                        <select className="form-select btn btn-light" aria-label="Default select example" value={toCoin}>
                            <option selected>BTC</option>
                            <option value="1">ETH</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </form>
                <button type="button" className="btn btn-outline-primary">
                    Swap button
                </button>
            </div>
        </div>
    );
}

export default Swap;