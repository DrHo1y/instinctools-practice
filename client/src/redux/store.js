import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import { rootWatcher } from './sagas/rootWatcher';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootWatcher);

export default store;
