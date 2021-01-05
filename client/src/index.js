import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './redux/reducers/rootReducer';
import { rootWatcher } from './redux/sagas/rootWatcher';
import AlertTemplate from 'react-alert-template-basic';
import { positions, Provider as AlertProvider } from 'react-alert';
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const alertOptiosn = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
};

saga.run(rootWatcher);

const app = (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptiosn}>
      <App />
    </AlertProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
