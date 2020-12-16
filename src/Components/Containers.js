import React from 'react';
import Container from './Container';

const Containers = (props) => {
  return (
  <div className="ui grid container">
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
    <Container isFar={props.isFar}/>
  </div>);
};

export default Containers;