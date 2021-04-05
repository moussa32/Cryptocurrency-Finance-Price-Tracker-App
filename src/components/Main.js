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
  });

  return (
    <React.Fragment>
      <h1>Hello?</h1>
    </React.Fragment>
  );
}

export default Main;