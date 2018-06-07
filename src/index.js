import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// App
import App from './app.js';
import reducers from './reducers';
import sagas from './sagas';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

// Run saga
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);