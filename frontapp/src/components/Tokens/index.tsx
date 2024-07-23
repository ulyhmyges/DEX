import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./Tokens.css";
import Token, { TokenProps } from "./Token";
import TokenColumns from "./TokenColumns";

const Tokens = () => {
  const [tokens, setTokens] = useState<TokenProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tokens")
      .then((res) => {
        setTokens(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <TokenColumns />
        </thead>
        <tbody>
          {tokens.map((token) => (
            <Token
              id={token.id}
              name={token.name}
              symbol={token.symbol}
              initial_supply={token.initial_supply}
              address={token.address}
              sender={token.sender}
              blockchain_name={token.blockchain_name}
              tx={token.tx}
            />
          ))}
        </tbody>
      </table>
      <div className="create-token">
        <button type="button" className="btn btn-warning">
          Create
        </button>
      </div>
    </div>
  );
};

export default Tokens;
