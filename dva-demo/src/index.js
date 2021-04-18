import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {dva} from 'dva';

const dvaApp = dva();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
