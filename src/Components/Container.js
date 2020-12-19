import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal';
import BeerSelector from './BeerSelector';

const Container = (props) => {
  const [show, setShow] = useState(false);
  const [beer, setBeer] = useState('');
  const closeBeerSelector = () => setShow(false);
  const openBeerSelector = () => setShow(true);
  const [tempGenerator, setTempGenerator] = useState(0);
  const generateTemperature = () => {
    const min = 20;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    setTempGenerator(rand);
  };
  const layout = props.isLayoutOne?"two wide column":"six wide column";
  const celsius = Math.floor(tempGenerator)/10
  const fahrenheit = Math.floor(tempGenerator*9/5+32)/10
  const tempTransafer = props.isFahrenheit?fahrenheit+' °F':celsius+' °C';
  const temperature = beer===''?'':tempTransafer;
  let warningMessage;
  if(beer==='Beer 1'){
    if(celsius>6) warningMessage = "It's too hot!";
    else if(celsius<4) warningMessage = "It's too cold!";
    else warningMessage = '';
  };
  if(beer==='Beer 2'){
    if(celsius>6) warningMessage = "It's too hot!";
    else if(celsius<5) warningMessage = "It's too cold!";
    else warningMessage = '';
  };
  if(beer==='Beer 3'){
    if(celsius>7) warningMessage = "It's too hot!";
    else if(celsius<4) warningMessage = "It's too cold!";
    else warningMessage = '';
  };
  if(beer==='Beer 4'){
    if(celsius>8) warningMessage = "It's too hot!";
    else if(celsius<6) warningMessage = "It's too cold!";
    else warningMessage = '';
  };
  if(beer==='Beer 5'){
    if(celsius>5) warningMessage = "It's too hot!";
    else if(celsius<3) warningMessage = "It's too cold!";
    else warningMessage = '';
  };

  return (
    <div className={layout}>
      Container
      <div onClick={openBeerSelector}>
        {beer===''?<i className="plus icon"></i>:''}
        <div>{beer}</div>
        <div>{temperature}</div>
        <div>{warningMessage}</div>
      </div>
      {show &&
        <Portal>
          <BeerSelector show={show} onClose={closeBeerSelector} setBeer={setBeer} generateTemperature={generateTemperature}/>
        </Portal>}
    </div>);
};

export default Container;