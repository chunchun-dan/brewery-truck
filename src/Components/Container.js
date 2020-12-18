import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal';
import BeerSelector from './BeerSelector';

const Container = (props) => {
  const [show, setShow] = useState(false);
  const [beer, setBeer] = useState('');
  const closeBeerSelector = () => setShow(false);
  const openBeerSelector = () => setShow(true);
  const tempUnit = props.isFahrenheit?'°F':'°C';
  const temp = beer===''?'':tempUnit;
  const warning = '';

  return (
    <div className="four wide column">
      Container
      <div onClick={openBeerSelector}>
        {beer===''?<button className="ui circular plus icon button">
          <i className="plus icon"></i>
        </button>:''}
        <div>{beer}</div>
        <div>{temp}</div>
        <div>{warning}</div>
      </div>
      {show &&
        <Portal>
          <BeerSelector show={show} onClose={closeBeerSelector} setBeer={setBeer}/>
        </Portal>
      }
    </div>);
};

export default Container;