import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Coin = ({ coinName, image, symbol, price, volume, priceChange, marketCap }) => {

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto coin" title="crypto coin" />
          <h3>{coinName}</h3>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            ${price}
          </p>
          <p className="coin-volume">
            ${volume.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            Market Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;