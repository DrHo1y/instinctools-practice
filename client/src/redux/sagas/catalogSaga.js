import { call, put, takeEvery } from 'redux-saga/effects';
import { searchCatalogFetched } from '../../api/catalog';
import { errorAction, hideLocalLoader, setMessage, showLocalLoader } from '../actions/appAction';
import { searcCatalogLocationAction } from '../actions/catalogAction';
import { CATALOG_SEARCH_LOCATION_CLICK } from '../types';

export function* catalogWatcher() {
  yield takeEvery(CATALOG_SEARCH_LOCATION_CLICK, searchWorker);
}

function* searchWorker({ location }) {
  try {
    yield put(showLocalLoader());
    const payload = yield call(searchCatalogFetched, location);
    yield put(searcCatalogLocationAction(payload));
    if (payload.data.length !== 0) {
      yield call(setItemToLocalStorage, 'where', location);
    }
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
    yield put(hideLocalLoader());
  }
}
