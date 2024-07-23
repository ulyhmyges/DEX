import React from "react";


const TokenColumns = () => {
  return (
    <tr>
      <td>id</td>
      <td>name</td>
      <td>symbol</td>
      <td>initial_supply</td>
      <td>address</td>
      <td>sender</td>
      <td>blockchain_name</td>
      <td>tx</td>
      <button type="button" className="btn btn-warning">Create</button>
    </tr>
  );
};

export default TokenColumns;
