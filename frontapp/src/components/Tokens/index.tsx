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
    <table className="">
      <thead className="token-columns">
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
  );
};

export default Tokens;
