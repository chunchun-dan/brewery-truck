import React from 'react';
import Temperature from './Temperature/Index';
import DeliveryBox from './DeliveryBox/Index';
import Settings from "./Settings/Index";
import propTypes from 'prop-types';

const App = () => {
  return (<div>
    <h1 style={{ position: 'absolute', top: '10px', left: '5px' }}>
      <i className="shipping fast icon"></i>
        The Brewery Truck
      </h1>
    <Temperature />
    <DeliveryBox />
    <Settings />
  </div>);
};

export default App;
