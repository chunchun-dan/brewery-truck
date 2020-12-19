import React from 'react';
import Container from './Container';

const Containers = (props) => {
  if(props.isLayoutOne){
    return (
    <div className="ui grid container">
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
    </div>);
  }else{
    return (
      <div className="ui grid container">
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
      <Container isFahrenheit={props.isFahrenheit} isLayoutOne={props.isLayoutOne}/>
    </div>
    );
  }
};

export default Containers;