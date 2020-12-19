import React from 'react';

const BeerSelector = (props) => {
  const chooseBeer = (beer) => {
    props.setBeer(beer);
    props.generateTemperature();
    props.onClose();
  };
  const clearBeer = () => {
    props.setBeer('');
    props.onClose();
  };
  return (
    <div>
      <section>
        <h2>Select Beer</h2>
        <div className="ui grid container">
          <div className="three wide column">
            <button onClick={e => chooseBeer('Beer 1')}>Beer 1</button>
          </div>
          <div className="three wide column">
            <button onClick={e => chooseBeer('Beer 2')}>Beer 2</button>
          </div>
          <div className="three wide column">
            <button onClick={e => chooseBeer('Beer 3')}>Beer 3</button>
          </div>
          <div className="three wide column">
            <button onClick={e => chooseBeer('Beer 4')}>Beer 4</button>
          </div>
          <div className="three wide column">
            <button onClick={e => chooseBeer('Beer 5')}>Beer 5</button>
          </div>
        </div>
        <p></p>
        <button onClick={clearBeer}>Clear</button>
      </section>
    </div>
  );
};

export default BeerSelector;