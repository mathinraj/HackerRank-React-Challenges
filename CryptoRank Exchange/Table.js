import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({inputAmount, hasError}) {

  // console.log(inputAmount);

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {
            cryptocurrencyList.map((crypto) => 
            <tr>
            <td>{crypto.name}</td>
            <td>{`1 USD = ${crypto.rate} ${crypto.unit}`}</td>
            <td>{hasError ? "n/a" : inputAmount===null ? "0.00000000" :inputAmount==="" ? "0.00000000" :  Number((inputAmount*crypto.rate).toFixed(8)) }</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
