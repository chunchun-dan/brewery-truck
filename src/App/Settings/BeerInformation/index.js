import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../../Portal';
import '../../Modal.css'

const BeerInformation = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if((e.charCode || e.keyCode) === 27) {
      props.closeBeerInfo();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return (
      <div className="modal" onClick={props.closeBeerInfo}>
        <section className="modal-content" onClick={e => e.stopPropagation()}>
          <h1>Beers
            <span className="close" onClick={props.closeBeerInfo}>&times;</span>
          </h1>
          <div>
            <h4>Beer 1</h4>
            <p>Refrigeration requirements: 4-6°C</p>
            <p></p>
          </div>
          <div>
            <h4>Beer 2</h4>
            <p>Refrigeration requirements: 5-6°C</p>
            <p></p>
          </div>
          <div>
            <h4>Beer 3</h4>
            <p>Refrigeration requirements: 4-7°C</p>
            <p></p>
          </div>
          <div>
            <h4>Beer 4</h4>
            <p>Refrigeration requirements: 6-8°C</p>
            <p></p>
          </div>
          <div>
            <h4>Beer 5</h4>
            <p>Refrigeration requirements: 3-5°C</p>
            <p></p>
          </div>
        </section>
      </div>
    )
};

BeerInformation.propTypes = {
  show: propTypes.bool
}

export default BeerInformation;