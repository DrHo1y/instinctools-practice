import { call, put, takeEvery } from 'redux-saga/effects';
import { searchCatalogFetched } from '../../api/catalog';
import { errorAction, hideLocalLoader, showLocalLoader } from '../actions/appAction';
import { searcCatalogLocationAction } from '../actions/catalogAction';
import { CATALOG_SEARCH_LOCATION_CLICK } from '../types';

export function* catalogWatcher() {
  yield takeEvery(CATALOG_SEARCH_LOCATION_CLICK, searchWorker);
}

export function* searchWorker({ location }) {
  try {
    yield put(showLocalLoader());
    const payload = yield call(searchCatalogFetched, location);
    yield put(searcCatalogLocationAction(payload));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
