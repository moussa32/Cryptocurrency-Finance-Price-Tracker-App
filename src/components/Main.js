import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(rs => {
        setCoins(rs.data);
        console.log(rs.data);
      })
      .catch(erorr => console.log(erorr))

  }, []);

  const handelChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <mian className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type='text' placeholder="Search" className="coin-input" onChange={handelChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            coinName={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </mian>
  );
}

export default Main;