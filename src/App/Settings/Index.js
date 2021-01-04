import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Portal from '../components/Portal';
import LayoutSelector from './LayoutSelector/index';
import BeerInformation from '../components/BeerInformation/index';
import './Settings.css';

const Settings = (props) => {
  const [showSettings, setShowSettings] = useState(false);
  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);
  const [showLayoutSelector,setShowLayoutSelector] = useState(false);
  const openLayoutSelector = () => {
    setShowSettings(false);
    setShowLayoutSelector(true);
  }
  const closeLayoutSelector = () => setShowLayoutSelector(false);
  const [showBeerInfo,setShowBeerInfo] = useState(false);
  const openBeerInfoAndCloseSettings = () => {
    setShowSettings(false);
    setShowBeerInfo(true);
  }
  const closeBeerInfo = () => setShowBeerInfo(false);
  const closeOnEscapeKeyDown = (e) => {
    if((e.charCode || e.keyCode) === 27) {
      closeSettings();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return(
    <div>
      <i className="big info circle icon" onClick={openSettings}></i>
      {showSettings &&
        <Portal>
          <div className="settings-background" onClick={closeSettings}>
            <div className="settings-content" onClick={e => e.stopPropagation()}>
              <div className="settings-option"><i className="pencil alternate icon" onClick={openLayoutSelector}></i></div>
              <div className="settings-option"><i className="beer icon" onClick={openBeerInfoAndCloseSettings}></i></div>
              <div className="settings-option"><i className="close icon" onClick={closeSettings}></i></div>
            </div>
          </div>
        </Portal>}
      {showLayoutSelector &&
      <Portal>
        <LayoutSelector isLayoutOne={props.isLayoutOne} setIsLayoutOne={props.setIsLayoutOne} isEmpty={props.isEmpty} setIsEmpty={props.setIsEmpty} closeLayoutSelector={closeLayoutSelector}/>
      </Portal>}
      {showBeerInfo &&
      <Portal>
        <BeerInformation closeBeerInfo={closeBeerInfo}/>
      </Portal>}
    </div>
  );
};

Settings.propTypes = {
  show: propTypes.bool,
  isLayoutOne: propTypes.bool,
  isEmpty: propTypes.bool
}

export default Settings;