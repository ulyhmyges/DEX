import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import './Coins.css'; 
import Coin from './Coin';
import Columns from "./Columns";

interface CoinData {
    id: string;
    name: string;
    current_price: number;
    symbol: string;
    total_volume: number;
    market_cap: number;
    image: string;
    price_change_percentage_24h: number;
  }

const Coins: React.FC = () => {
    const [coins, setCoins] = useState<CoinData[]>([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&x_cg_api_key=CG-RcWa5TwH1dZv43K5uSU14nPy'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        <Columns />
        {filteredCoins.map(coin => (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    );
  }
  

export default Coins;






// import React, { useEffect, useState } from 'react';
// import { fetchTokens, fetchTokenData } from '../../services/TokenService';
// import './Tokens.css'; 

// interface Token {
//     id: number;
//     name: string;
//     symbol: string;
//     price?: number;
//     volume24h?: number;
// }

// const Tokens = () => {
//     const [tokens, setTokens] = useState<Token[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const getTokens = async () => {
//             try {
//                 const tokensData = await fetchTokens();
//                 const tokensWithPrices = await Promise.all(tokensData.map(async (token: Token) => {
//                     try {
//                         const data = await fetchTokenData(token.symbol);
//                         return { ...token, price: data.price, volume24h: data.volume24h };
//                     } catch (err) {
//                         return { ...token, price: 0, volume24h: 0 };
//                     }
//                 }));
//                 setTokens(tokensWithPrices);
//             } catch (err: any) {
//                 setError(err.message);
//             }
//         };

//         getTokens();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <h1 className="mb-4">Tokens List</h1>
//             <ul className="list-group">
//                 <li className="list-group-item d-flex justify-content-between">
//                     <strong className="flex-fill column-name">Nom</strong>
//                     <strong className="flex-fill column-price text-center">Prix</strong>
//                     <strong className="flex-fill column-volume text-right">Volume (24h)</strong>
//                 </li>
//                 {tokens.map((token) => (
//                     <li key={token.id} className="list-group-item d-flex justify-content-between">
//                         <span className="flex-fill column-name">{token.name} ({token.symbol})</span>
//                         <span className="flex-fill column-price text-center">${token.price?.toFixed(2) || 'N/A'}</span>
//                         <span className="flex-fill column-volume text-right">{token.volume24h?.toFixed(2) || 'N/A'}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Tokens;

