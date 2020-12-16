import React from 'react';

const Container = (props) => {
  const showIcon = props.isEmpty?'plus icon':'';
  return (
    <div className="four wide column" onClick={() => props.setIsEmpty(!props.isEmpty)}>
      Container
      <div>{props.isFar?'°F':'°C'}</div>
      <i className={showIcon}></i>
    </div>);
};

export default Container;

//<div className="eight wide column">