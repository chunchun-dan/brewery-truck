import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';

const Portal = ({children}) => {
  return createPortal(children, document.body);
};

export default Portal;