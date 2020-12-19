import React, {useState} from 'react';
import Temperature from './Temperature';
import DeliveryBox from './DeliveryBox';
import Settings from "./Settings";

const App = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [isLayoutOne, setIsLayoutOne] = useState(true);
  return (<div>
      <h1>
        <i className="shipping fast icon"></i>
        The Brewery Truck
      </h1>
      <Temperature isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit}/>
      <DeliveryBox isFahrenheit={isFahrenheit} isLayoutOne={isLayoutOne}/>
      <Settings isLayoutOne={isLayoutOne} setIsLayoutOne={setIsLayoutOne}/>
    </div>);
};

export default App;