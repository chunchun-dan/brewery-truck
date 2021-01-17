import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../../../components/Portal';
import BeerInfo from '../../../components/BeerInformation/index';
import './BeerSelector.css';
import { useRecoilState } from 'recoil';
import { isEmptyState } from '../../../Atoms';

const BeerSelector = (props) => {
  const [isEmpty, setIsEmpty] = useRecoilState(isEmptyState);
  const [showBeerInfo, setShowBeerInfo] = useState(false);
  const closeBeerInfo = () => setShowBeerInfo(false);
  const openBeerInfo = () => setShowBeerInfo(true);
  const chooseBeer = (beer) => {
    props.setBeer(beer);
    props.generateTemperature();
    setIsEmpty(false);
    props.closeBeerSelector();
  };
  const clearBeer = () => {
    props.setBeer('');
    setIsEmpty(false);
    props.closeBeerSelector();
  };
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.closeBeerSelector();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className="modal" onClick={props.closeBeerSelector}>
      <section className="modal-content" onClick={e => e.stopPropagation()}>
        <h1>
          <span className="header">Select Beer</span>
          <span><i className="beer icon beer-info" onClick={openBeerInfo} /></span>
        </h1>
        <div className="beer-options">
          <div>
            <button className="beer-one-button" onClick={e => chooseBeer('Beer 1')}>Beer 1</button>
          </div>
          <div>
            <button className="beer-two-button" onClick={e => chooseBeer('Beer 2')}>Beer 2</button>
          </div>
          <div>
            <button className="beer-three-button" onClick={e => chooseBeer('Beer 3')}>Beer 3</button>
          </div>
          <div>
            <button className="beer-four-button" onClick={e => chooseBeer('Beer 4')}>Beer 4</button>
          </div>
          <div>
            <button className="beer-five-button" onClick={e => chooseBeer('Beer 5')}>Beer 5</button>
          </div>
        </div>
        <button className="clear-button" onClick={clearBeer}>Clear</button>
        {showBeerInfo &&
          <Portal>
            <BeerInfo closeBeerInfo={closeBeerInfo} />
          </Portal>}
      </section>
    </div>
  );
};

BeerSelector.propTypes = {
  beer: propTypes.string,
  isEmpty: propTypes.bool
}

export default BeerSelector;
