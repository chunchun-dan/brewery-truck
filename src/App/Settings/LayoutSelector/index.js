import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../../components/Portal';
import '../../components/Modal.css';
import './LayoutSelector.css';
import { isLayoutOneState, isEmptyState } from '../../Atoms';
import { useRecoilState } from 'recoil';

const LayoutSelector = (props) => {
  const [isLayoutOne, setIsLayoutOne] = useRecoilState(isLayoutOneState);
  const [isEmpty, setIsEmpty] = useRecoilState(isEmptyState);
  const chooseLayoutOne = () => {
    setIsLayoutOne(true);
    setIsEmpty(true);
    props.closeLayoutSelector();
  };
  const chooseLayoutTwo = () => {
    setIsLayoutOne(false);
    setIsEmpty(true);
    props.closeLayoutSelector();
  };
  const LayoutOneSelected = isLayoutOne ? 'selected' : '';
  const LayoutTwoSelected = isLayoutOne ? '' : 'selected';
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
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
  isLayoutOne: propTypes.bool,
  LayoutOneSelected: propTypes.string,
  LayoutTwoSelected: propTypes.string,
  isEmpty: propTypes.bool
}

export default LayoutSelector;
