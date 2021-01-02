import React, { useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../../Portal';
import '../../Modal.css';
import './LayoutSelector.css';

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
  const LayoutOneSelected = props.isLayoutOne?'selected':'';
  const LayoutTwoSelected = props.isLayoutOne?'':'selected';
  return (<div>
        <i className="pencil alternate icon" onClick={openLayoutSelector}></i>
      {show && <Portal>
        <div className="modal">
          <div className="modal-content layout-selector">
            <h1>Select Layout</h1>
            <div className={LayoutOneSelected}>
              <div className="layout-one" onClick={chooseLayoutOne}>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
              </div>
            </div>
            <div className={LayoutTwoSelected}>
              <div className="layout-two" onClick={chooseLayoutTwo}>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
                <div className="box">container</div>
              </div>
            </div>
          </div>
        </div>
      </Portal>}
    </div>);
};

LayoutSelector.propTypes = {
  show: propTypes.bool,
  LayoutOneSelected: propTypes.string,
  LayoutTwoSelected: propTypes.string
}

export default LayoutSelector;