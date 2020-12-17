import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './redux/reducers/rootReducer';
import { rootWatcher } from './redux/sagas/rootWatcher';
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
