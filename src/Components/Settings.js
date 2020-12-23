import React, { useState } from 'react';
import Portal from './Portal';
import LayoutSelector from './LayoutSelector';
import BeerInformation from './BeerInfomation';

const Settings = (props) => {
  const [show, setShow] = useState(false);
  const open = () => setShow(true);
  const close = () => setShow(false);
  return(
    <div>
      <i className="big info circle icon" onClick={open}></i>
      {show &&
        <Portal>
          <div>
            <div><LayoutSelector isLayoutOne={props.isLayoutOne} setIsLayoutOne={props.setIsLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/></div>
            <div><BeerInformation /></div>
            <div>
              <button onClick={close}>
                <i className="close icon"></i>
              </button>
            </div>
          </div>
        </Portal>}
    </div>
  );
};

export default Settings;