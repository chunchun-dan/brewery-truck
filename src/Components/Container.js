import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal';
import BeerSelector from './BeerSelector';
import './Container.css';

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
  const celsius = Math.floor(tempGenerator) / 10
  const fahrenheit = Math.floor(tempGenerator * 9 / 5 + 32) / 10
  const tempTransafer = props.isFahrenheit ? fahrenheit + ' °F' : celsius + ' °C';
  const temperature = beer === '' ? '' : tempTransafer;

  let containerClassName = 'container';
  let warningMessage;

  if (beer === 'Beer 1') {
    containerClassName = "container-beer-one";
    if (celsius > 6) {warningMessage = "It's too hot!"; containerClassName= "container-hot";}
    else if (celsius < 4) {warningMessage = "It's too cold!"; containerClassName= "container-cold";}
    else warningMessage = '';
  };
  if (beer === 'Beer 2') {
    containerClassName = "container-beer-two";
    if (celsius > 6) {warningMessage = "It's too hot!"; containerClassName= "container-hot";}
    else if (celsius < 5) {warningMessage = "It's too cold!"; containerClassName= "container-cold";}
    else warningMessage = '';
  };
  if (beer === 'Beer 3') {
    containerClassName = "container-beer-three";
    if (celsius > 7) {warningMessage = "It's too hot!"; containerClassName= "container-hot";}
    else if (celsius < 4) {warningMessage = "It's too cold!"; containerClassName= "container-cold";}
    else warningMessage = '';
  };
  if (beer === 'Beer 4') {
    containerClassName = "container-beer-four";
    if (celsius > 8) {warningMessage = "It's too hot!"; containerClassName= "container-hot";}
    else if (celsius < 6) {warningMessage = "It's too cold!"; containerClassName= "container-cold";}
    else warningMessage = '';
  };
  if (beer === 'Beer 5') {
    containerClassName = "container-beer-five";
    if (celsius > 5) {warningMessage = "It's too hot!"; containerClassName= "container-hot";}
    else if (celsius < 3) {warningMessage = "It's too cold!"; containerClassName= "container-cold";}
    else warningMessage = '';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateTemperature();
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (props.isEmpty) {
      setBeer('');
    };
  });

  console.log(containerClassName)

  return (
    <div className={containerClassName}>
      <div onClick={openBeerSelector}>
        {beer === '' ?
          <div>
            <p></p>
            <i className="plus icon"></i>
          </div> : ''}
        <h3>{beer}</h3>
        <div>{temperature}</div>
        <p></p>
        <div>{warningMessage}</div>
      </div>
      {show &&
        <Portal>
          <BeerSelector show={show} onClose={closeBeerSelector} setBeer={setBeer} generateTemperature={generateTemperature} setIsEmpty={props.setIsEmpty} />
        </Portal>}
    </div>);
};

export default Container;