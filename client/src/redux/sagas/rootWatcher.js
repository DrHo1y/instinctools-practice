import { all } from 'redux-saga/effects';
import { signWatcher } from './userSaga';

export function* rootWatcher() {
  yield all([signWatcher()]);
}
