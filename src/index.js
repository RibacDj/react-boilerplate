import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';
import messages_de from './translations/de.json';
import messages_en from './translations/en.json';

import App from './app/app';

import * as serviceWorker from './serviceWorker';

const messages = {
  de: messages_de,
  en: messages_en
};

ReactDOM.render(
  <IntlProvider locale='en' messages={messages['en']}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
