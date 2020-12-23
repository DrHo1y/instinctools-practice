import { all } from 'redux-saga/effects';
import { loadingWatcher } from './locationSaga';
import { partnerWathcer } from './partnerSaja';
import { signWatcher } from './userSaga';

export function* rootWatcher() {
  yield all([signWatcher(), partnerWathcer(), loadingWatcher()]);
}
