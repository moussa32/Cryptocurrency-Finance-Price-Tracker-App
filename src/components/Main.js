import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Main = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(rs => {
        setCoins(rs.data);
        console.log(rs.data);
      })
      .catch(erorr => console.log(erorr))
  }, []);

  return (
    <mian className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type='text' placeholder="Search" className="coin-input" />
        </form>
      </div>
    </mian>
  );
}

export default Main;