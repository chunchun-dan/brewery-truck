import React from 'react';
import Container from './Container';

const Containers = (props) => {
  if (props.isLayoutOne) {
    return (
      <div className="ui grid container">
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
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
      </div>);
  } else {
    return (
      <div className="ui grid container">
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
        <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/>
      </div>
    );
  }
};

export default Containers;