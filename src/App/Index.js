import React, {useState} from 'react';
import Temperature from './Temperature/Index';
import DeliveryBox from './DeliveryBox/Index';
import Settings from "./Settings/Index";
import propTypes from 'prop-types';


const App = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [isLayoutOne, setIsLayoutOne] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  return (<div>
      <h1 style={{position:'absolute', top:'10px', left:'5px'}}>
        <i className="shipping fast icon"></i>
        The Brewery Truck
      </h1>
      <Temperature isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit}/>
      <DeliveryBox isFahrenheit={isFahrenheit} isLayoutOne={isLayoutOne} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
      <Settings isLayoutOne={isLayoutOne} setIsLayoutOne={setIsLayoutOne} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    </div>);
};

App.propTypes = {
  isFahrenheit: propTypes.bool,
  isLayoutOne: propTypes.bool,
  isEmpty: propTypes.bool
}

export default App;