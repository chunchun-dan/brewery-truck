import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import Portal from '../../components/Portal';
import BeerSelector from './BeerSelector/Index';
import BeerInfo from '../../components/BeerInformation/index';
import './Container.css';
import '../../components/Modal.css';
import { isFahrenheitState, isEmptyState } from '../../Atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

const Container = (props) => {
  const [showBeerSelector, setShowBeerSelector] = useState(false);
  const [beer, setBeer] = useState('');
  const closeBeerSelector = () => setShowBeerSelector(false);
  const openBeerSelector = () => setShowBeerSelector(true);

  const [tempGenerator, setTempGenerator] = useState(0);
  const generateTemperature = () => {
    const min = 20;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    setTempGenerator(rand);
  };
  const celsius = Math.floor(tempGenerator) / 10
  const fahrenheit = Math.floor(tempGenerator * 9 / 5 + 32) / 10
  const isFahrenheit = useRecoilValue(isFahrenheitState);
  const tempTransafer = isFahrenheit ? fahrenheit + ' °F' : celsius + ' °C';
  const temperature = beer === '' ? '' : tempTransafer;

  const [isEmpty, setIsEmpty] = useRecoilState(isEmptyState);

  let containerClassName = 'container';
  let warningMessage;

  if (beer === 'Beer 1') {
    containerClassName = "container-beer-one";
    if (celsius > 6) { warningMessage = "It's too hot!"; containerClassName = "container-hot"; }
    else if (celsius < 4) { warningMessage = "It's too cold!"; containerClassName = "container-cold"; }
    else warningMessage = '';
  };
  if (beer === 'Beer 2') {
    containerClassName = "container-beer-two";
    if (celsius > 6) { warningMessage = "It's too hot!"; containerClassName = "container-hot"; }
    else if (celsius < 5) { warningMessage = "It's too cold!"; containerClassName = "container-cold"; }
    else warningMessage = '';
  };
  if (beer === 'Beer 3') {
    containerClassName = "container-beer-three";
    if (celsius > 7) { warningMessage = "It's too hot!"; containerClassName = "container-hot"; }
    else if (celsius < 4) { warningMessage = "It's too cold!"; containerClassName = "container-cold"; }
    else warningMessage = '';
  };
  if (beer === 'Beer 4') {
    containerClassName = "container-beer-four";
    if (celsius > 8) { warningMessage = "It's too hot!"; containerClassName = "container-hot"; }
    else if (celsius < 6) { warningMessage = "It's too cold!"; containerClassName = "container-cold"; }
    else warningMessage = '';
  };
  if (beer === 'Beer 5') {
    containerClassName = "container-beer-five";
    if (celsius > 5) { warningMessage = "It's too hot!"; containerClassName = "container-hot"; }
    else if (celsius < 3) { warningMessage = "It's too cold!"; containerClassName = "container-cold"; }
    else warningMessage = '';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateTemperature();
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (isEmpty) {
      setBeer('');
      setIsEmpty(false);
    };
  });

  return (
    <div>
      <div className={containerClassName + ' pointed'} onClick={openBeerSelector}>
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
      {showBeerSelector &&
        <Portal>
          <BeerSelector closeBeerSelector={closeBeerSelector} setBeer={setBeer} generateTemperature={generateTemperature} />
        </Portal>}
    </div>);
};

Container.propTypes = {
  show: propTypes.bool,
  beer: propTypes.string,
  tempGenerator: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  rand: propTypes.number,
  celsius: propTypes.number,
  fahrenheit: propTypes.number,
  isFahrenheit: propTypes.bool,
  tempTransafer: propTypes.string,
  temperature: propTypes.string,
  containerClassName: propTypes.string,
  warningMessage: propTypes.string,
  isEmpty: propTypes.bool
}

export default Container;
