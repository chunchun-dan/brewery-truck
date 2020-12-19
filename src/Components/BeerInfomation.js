import React, { useState } from 'react';
import Portal from './Portal';

const BeerInformation = () => {
  const [show,setShow] = useState(false);
  const openBeerInfo = () => setShow(true);
  const closeBeerInfo = () => setShow(false);
  return (<div>
    <button onClick={openBeerInfo}>
      <i className="beer icon"></i> Beer informatin
    </button>
    {show && <Portal>
      <section>
        <h2>Beers</h2>
        <div><h4>Beer 1</h4> Refrigeration requirements: 4-6°C</div>
        <div><h4>Beer 2</h4> Refrigeration requirements: 5-6°C</div>
        <div><h4>Beer 3</h4> Refrigeration requirements: 4-7°C</div>
        <div><h4>Beer 4</h4> Refrigeration requirements: 6-8°C</div>
        <div><h4>Beer 5</h4> Refrigeration requirements: 3-5°C</div>
        <button onClick={closeBeerInfo}>close</button>
      </section>
    </Portal>}
  </div>)
};

export default BeerInformation;