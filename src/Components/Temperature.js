import React from 'react';

const Temperature = (props) => {
  const tempUnit = props.isFahrenheit?'°F':'°C';
  return(
    <div>
      <i className="big snowflake icon" onClick={() => props.setIsFahrenheit(!props.isFahrenheit)}>{tempUnit}</i>
    </div>
  );
};

export default Temperature;