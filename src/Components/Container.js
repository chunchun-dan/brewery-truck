import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import BeerSelector from './BeerSelector';
import './Modal.css';

const Container = (props) => {
  const [show, setShow] = useState(false);
  const closeBeerSelector = () => setShow(false);
  const openBeerSelector = () => setShow(true);
  return (
    <div className="four wide column">
      Container
      <div>{props.isFahrenheit?'°F':'°C'}</div>
      <button className="ui circular plus icon button" onClick={openBeerSelector}>
        <i className="plus icon"></i>
      </button>
      <BeerSelector show={show} onClose={closeBeerSelector}/>
    </div>);
};

const modal = document.createElement("div");
document.body.appendChild(modal);
ReactDOM.render(<BeerSelector/>, modal);

export default Container;

//<div className="eight wide column">
//<div className="four wide column" onClick={() => setIsEmpty(!isEmpty)}></div>
//<i className={showIcon}></i>
//const [isEmpty,setIsEmpty] = useState(true);
//const showIcon = isEmpty?'plus icon':'';