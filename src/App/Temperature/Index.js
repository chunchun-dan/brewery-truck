import React from 'react';
import './Temperature.css';

const Temperature = (props) => {
  const tempUnit = props.isFahrenheit?'°F':'°C';
  return(
    <div className="temperature-icon">
      <i className="big snowflake icon" onClick={() => props.setIsFahrenheit(!props.isFahrenheit)}></i>
      <div>{tempUnit}</div>
    </div>
  );
};

export default Temperature;