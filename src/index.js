import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp  from './Routes/MainApp';
import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);

