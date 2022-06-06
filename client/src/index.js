import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import reducers from '../src/reducers'

import App from './App';
import './index.css'
import {Provider} from "react-redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));