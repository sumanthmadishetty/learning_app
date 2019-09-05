import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'
// import FormReducer from './Reducers/FormReducer.js';
// const store = createStore(FormReducer)
import { configureStore } from './Reducers/RootReducer'
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 