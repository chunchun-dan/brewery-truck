import React from 'react';

const Temperature = (props) => {
  const tempUnit = props.isFar?'°F':'°C';
  return(
    <div>
      <i className="big snowflake icon" onClick={() => props.setIsFar(!props.isFar)}>{tempUnit}</i>
    </div>
  );
};

export default Temperature;