import React from 'react';
import Container from './Container';

const Containers = (props) => {
  return (
  <div className="ui grid container">
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
    <Container isFahrenheit={props.isFahrenheit}/>
  </div>);
};

export default Containers;