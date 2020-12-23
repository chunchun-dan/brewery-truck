import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Portal from './Portal';

const LayoutSelector = (props) => {
  const [show,setShow] = useState(false);
  const openLayoutSelector = () => setShow(true);
  const closeLayoutSelector = () => setShow(false);
  const chooseLayoutOne = () => {
    props.setIsLayoutOne(true);
    props.setIsEmpty(true);
    closeLayoutSelector();
  };
  const chooseLayoutTwo = () => {
    props.setIsLayoutOne(false);
    props.setIsEmpty(true);
    closeLayoutSelector();
  };
  return (<div>
      <button onClick={openLayoutSelector}>
        <i className="pencil alternate icon"></i> Select Layout
      </button>
      {show && <Portal>
        <div onClick={chooseLayoutOne}>Layout 8 x 2</div>
        <div onClick={chooseLayoutTwo}>Layout 2 x 2</div>
      </Portal>}
    </div>);
};

export default LayoutSelector;