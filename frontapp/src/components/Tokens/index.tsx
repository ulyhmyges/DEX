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
