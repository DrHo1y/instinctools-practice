import { all } from 'redux-saga/effects';
import { catalogWatcher } from './catalogSaga';
import { loadingWatcher } from './locationSaga';
import { partnerWathcer } from './partnerSaja';
import { signWatcher } from './userSaga';

export function* rootWatcher() {
  yield all([signWatcher(), partnerWathcer(), loadingWatcher(), catalogWatcher()]);
}
