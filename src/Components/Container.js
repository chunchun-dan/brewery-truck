import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal';
import BeerSelector from './BeerSelector';

const Container = (props) => {
  const [show, setShow] = useState(false);
  const [beer, setBeer] = useState('');
  const closeBeerSelector = () => setShow(false);
  const openBeerSelector = () => setShow(true);
  const layout = props.isLayoutOne?"two wide column":"six wide column";
  const tempUnit = props.isFahrenheit?'°F':'°C';
  const temp = beer===''?'':tempUnit;
  const warning = '';

  return (
    <div className={layout}>
      Container
      <div onClick={openBeerSelector}>
        {beer===''?<i className="plus icon"></i>:''}
        <div>{beer}</div>
        <div>{temp}</div>
        <div>{warning}</div>
      </div>
      {show &&
        <Portal>
          <BeerSelector show={show} onClose={closeBeerSelector} setBeer={setBeer}/>
        </Portal>}
    </div>);
};

export default Container;