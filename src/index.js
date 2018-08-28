import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from './rootReducer'
import rootEpics from './rootEpics'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpics);
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();