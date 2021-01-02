import React, { useState } from 'react';
import Portal from '../../Portal';
import '../../Modal.css'

const BeerInformation = () => {
  const [show,setShow] = useState(false);
  const openBeerInfo = () => setShow(true);
  const closeBeerInfo = () => setShow(false);
  return (<div>
      <i className="beer icon" onClick={openBeerInfo}></i>
    {show && <Portal>
      <div className="modal">
        <section className="modal-content">
          <h1>Beers
            <span className="close" onClick={closeBeerInfo}>&times;</span>
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
    </Portal>}
  </div>)
};

export default BeerInformation;