import React from 'react';
import propTypes from 'prop-types';
import './Temperature.css';
import { isFahrenheitState } from '../Atoms';
import { useRecoilState } from 'recoil';

const Temperature = () => {
  const [isFahrenheit, setIsFahrenheit] = useRecoilState(isFahrenheitState);
  const tempUnit = isFahrenheit ? '°F' : '°C';
  return (
    <div className="temperature-icon">
      <i className="big snowflake icon" onClick={() => setIsFahrenheit(!isFahrenheit)}></i>
      <div>{tempUnit}</div>
    </div>
  );
};

Temperature.propTypes = {
  isFahrenheit: propTypes.bool,
  tempUnit: propTypes.string
}

export default Temperature;
