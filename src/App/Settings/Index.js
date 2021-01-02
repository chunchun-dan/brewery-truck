import React, { useState } from 'react';
import Portal from '../Portal';
import LayoutSelector from './LayoutSelector/index';
import BeerInformation from './BeerInformation/index';
import './Settings.css';

const Settings = (props) => {
  const [show, setShow] = useState(false);
  const open = () => setShow(true);
  const close = () => setShow(false);
  return(
    <div>
      <i className="big info circle icon" onClick={open}></i>
      {show &&
        <Portal>
          <div className="settings-background">
            <div className="settings-content">
              <div className="settings-option"><LayoutSelector isLayoutOne={props.isLayoutOne} setIsLayoutOne={props.setIsLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty}/></div>
              <div className="settings-option"><BeerInformation /></div>
              <div className="settings-option">
                <div><i className="close icon" onClick={close}></i></div>
                </div>
            </div>
          </div>
        </Portal>}
    </div>
  );
};

export default Settings;