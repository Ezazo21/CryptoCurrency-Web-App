import React, { useEffect, useState } from 'react';
import './MyApp.css'; // Change the import to your new CSS file
import axios from 'axios';
import Coin from './MyCoin';

function MyApp() {
  const [myCoins, setMyCoins] = useState([]);
  const [mySearch, setMySearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setMyCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (e) => {
    setMySearch(e.target.value);
  };

  const filteredMyCoins = myCoins.filter((coin) =>
    coin.name.toLowerCase().includes(mySearch.toLowerCase())
  );

  return (
    <div className="my-app">
      <div className="my-search"> 
        <form>
          <input
            type="text"
            className="my-input" 
            placeholder="Provide the coin name"
            onChange={handleSearchChange}
          />
        </form>
      </div>
      {filteredMyCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default MyApp;