import React from 'react';

const BeerSelector = (props) => {
  const showHideClassName = props.show?"modal display-block":"modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Select Beer</h2>
        <div className="ui grid container">
          <div className="three wide column">
            Beer 1
          </div>
          <div className="three wide column">
            Beer 2
          </div>
          <div className="three wide column">
            Beer 3
          </div>
          <div className="three wide column">
            Beer 4
          </div>
          <div className="three wide column">
            Beer 5
          </div>
        </div>
        <button onClick={props.onClose}>Clear</button>
      </section>
    </div>
  );
};

export default BeerSelector;