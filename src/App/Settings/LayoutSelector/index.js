import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../../components/Portal';
import '../../components/Modal.css';
import './LayoutSelector.css';

const LayoutSelector = (props) => {
  const chooseLayoutOne = () => {
    props.setIsLayoutOne(true);
    props.setIsEmpty(true);
    props.closeLayoutSelector();
  };
  const chooseLayoutTwo = () => {
    props.setIsLayoutOne(false);
    props.setIsEmpty(true);
    props.closeLayoutSelector();
  };
  const LayoutOneSelected = props.isLayoutOne?'selected':'';
  const LayoutTwoSelected = props.isLayoutOne?'':'selected';
  const closeOnEscapeKeyDown = (e) => {
    if((e.charCode || e.keyCode) === 27) {
      props.closeLayoutSelector();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return (
        <div className="modal" onClick={props.closeLayoutSelector}>
          <div className="modal-content layout-selector" onClick={e => e.stopPropagation()}>
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
  )
};

LayoutSelector.propTypes = {
  show: propTypes.bool,
  LayoutOneSelected: propTypes.string,
  LayoutTwoSelected: propTypes.string
}

export default LayoutSelector;