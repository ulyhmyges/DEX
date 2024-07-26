import React from "react";

export interface TokenProps {
  id: string;
  name: string;
  symbol: string;
  initial_supply: number;
  address: string;
  sender: string;
  blockchain_name: string;
  tx: string;
}

const Token = (props: TokenProps) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.symbol}</td>
      <td>{props.initial_supply}</td>
      <td>{props.address}</td>
      <td>{props.sender}</td>
      <td>{props.blockchain_name}</td>
      <td>{props.tx}</td>
    </tr>
  );
};

export default Token;
