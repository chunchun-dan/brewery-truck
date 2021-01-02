import React from 'react';
import propTypes from 'prop-types';
import Container from './Container/Index';
import './Layout.css';

const Containers = (props) => {
  if (props.isLayoutOne) {
    return (
      <div className="containers one">
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
      </div>);
  } else {
    return (
      <div className="containers two">
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
      </div>
    );
  }
};

Containers.propTypes = {
  isFahrenheit: propTypes.bool,
  isLayoutOne: propTypes.bool,
  isEmpty: propTypes.bool
}

export default Containers;