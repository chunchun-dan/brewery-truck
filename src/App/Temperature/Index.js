import React from 'react';
import propTypes from 'prop-types';
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

Temperature.propTypes = {
  isFahrenheit: propTypes.bool,
  tempUnit: propTypes.string
}

export default Temperature;