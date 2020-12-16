import React, {useState} from 'react';

const Container = (props) => {
  const [isEmpty,setIsEmpty] = useState('true');
  const showIcon = isEmpty?'plus icon':'';
  return (
    <div className="four wide column" onClick={() => setIsEmpty(!isEmpty)}>
      Container
      <div>{props.isFar?'°F':'°C'}</div>
      <i className={showIcon}></i>
    </div>);
};

export default Container;

//<div className="eight wide column">