import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {allReducer} from './reducer/index.js';
import {provider} from 'react-redux';

const store = createStore(allReducer);

ReactDOM.render(
    <provider store = {store}>
    <App />
    </provider>
, document.getElementById('root'));
registerServiceWorker();
