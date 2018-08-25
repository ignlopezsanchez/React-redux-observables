import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import {searchReducer} from './features/Home2/search/searchReducer'
import {searchEpic} from './features/Home2/search/searchEpic'
import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    searchReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(searchEpic);
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();