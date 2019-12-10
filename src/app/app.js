import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { WindowManager } from 'react-window-decorators';
import breakpoints from './constants/breakpoints';

import Home from './views/Home';

import './utils/modernizr';
import '../scss/index.scss';

new WindowManager(breakpoints.formatted, 500);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
