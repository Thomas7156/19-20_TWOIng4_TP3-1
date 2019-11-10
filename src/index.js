import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js'
import { Provider } from 'react-redux'
import Store from './Store/ConfigureStore.js'

ReactDOM.render(
  <Provider store={ Store }>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
