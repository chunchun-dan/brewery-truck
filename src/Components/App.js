import React, {useState} from 'react';
import Temperature from './Temperature';
import DeliveryBox from './DeliveryBox';
import Settings from "./Settings";

const App = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [isLayoutOne, setIsLayoutOne] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  return (<div>
      <h1>
        <i className="shipping fast icon"></i>
        The Brewery Truck
      </h1>
      <Temperature isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit}/>
      <DeliveryBox isFahrenheit={isFahrenheit} isLayoutOne={isLayoutOne} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
      <Settings isLayoutOne={isLayoutOne} setIsLayoutOne={setIsLayoutOne} isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
    </div>);
};

export default App;