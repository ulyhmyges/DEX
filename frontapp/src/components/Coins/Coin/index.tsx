import React from 'react';
import './Coin.css';

interface CoinProps {
  name: string;
  price: number;
  symbol: string;
  marketcap: number;
  volume: number;
  image: string;
  priceChange: number;
}

const Coin: React.FC<CoinProps> = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>
            {priceChange.toFixed(2)}%
          </p>
          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
