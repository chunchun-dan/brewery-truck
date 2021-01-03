import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import './BeerSelector.css';

const BeerSelector = (props) => {
  const chooseBeer = (beer) => {
    props.setBeer(beer);
    props.generateTemperature();
    props.setIsEmpty(false);
    props.onClose();
  };
  const clearBeer = () => {
    props.setBeer('');
    props.setIsEmpty(false);
    props.onClose();
  };
  const closeOnEscapeKeyDown = (e) => {
    if((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className="modal" onClick={props.onClose}>
      <section className="modal-content" onClick={e => e.stopPropagation()}>
        <h1>Select Beer
        <span className="close" onClick={props.onClose}>&times;</span>
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
      </section>
    </div>
  );
};

BeerSelector.propTypes = {
  beer: propTypes.string
}

export default BeerSelector;