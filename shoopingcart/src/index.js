import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartCompo from './components/cartCompo';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Header from './components/header'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootreducer from './redux/Reducer'
const createStorewithmiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStorewithmiddleware(rootreducer)}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App}/>
        <Route exact path="/cart" component={CartCompo}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
