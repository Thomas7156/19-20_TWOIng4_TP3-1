import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js'
import { Provider } from 'react-redux'
import Store from './Store/ConfigureStore.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <Provider store={ Store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
