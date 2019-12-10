import React from 'react';
import { WindowManager } from 'react-window-decorators';
import breakpoints from './constants/breakpoints';

import './utils/modernizr';
import './scss/index.scss';

new WindowManager(breakpoints.formatted, 500);

const App = () => {
  return <div className='App'>Hello World</div>;
};

export default App;
