import React, {useState} from 'react';
import Temperature from './Temperature';
import Containers from './Containers';
import Settings from "./Settings";

const App = () => {
  const [isFar, setIsFar] = useState(true);
  return (<div>
      <h1>
        <i className="shipping fast icon"></i>
        The Brewery Truck
      </h1>
      <Temperature isFar = {isFar} setIsFar = {setIsFar}/>
      <Containers isFar = {isFar}/>
      <Settings/>
    </div>);
};

export default App;