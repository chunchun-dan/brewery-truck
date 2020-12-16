import React, { useState } from 'react';
import Container from './Container';

const Containers = (props) => {
  const [isEmpty,setIsEmpty] = useState('true');
  return (
  <div className="ui grid container">
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    <Container isFar={props.isFar} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
  </div>);
};

export default Containers;