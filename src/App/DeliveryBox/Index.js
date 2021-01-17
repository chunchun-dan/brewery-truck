import React from 'react';
import propTypes from 'prop-types';
import Container from './Container/Index';
import './Layout.css';
import { isLayoutOneState } from '../Atoms';
import { useRecoilValue } from 'recoil';

const DeliveryBox = () => {
  const isLayoutOne = useRecoilValue(isLayoutOneState);
  if (isLayoutOne) {
    return (
      <div className="containers one">
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
      </div>);
  } else {
    return (
      <div className="containers two">
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    );
  }
};

DeliveryBox.propTypes = {
  isLayoutOne: propTypes.bool,
}

export default DeliveryBox;
