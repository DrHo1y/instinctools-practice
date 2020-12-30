import { call, put, takeEvery } from 'redux-saga/effects';
import { searchCatalogFetched } from '../../api/catalog';
import { getItemInLocalStorage, setItemToLocalStorage } from '../../utils/localstorage';
import { errorAction, hideLocalLoader, showLocalLoader } from '../actions/appAction';
import { searcCatalogLocationAction } from '../actions/catalogAction';
import { CATALOG_LOADING_PAGE, CATALOG_SEARCH_LOCATION_CLICK } from '../types';

export function* catalogWatcher() {
  yield takeEvery(CATALOG_SEARCH_LOCATION_CLICK, searchWorker);
  yield takeEvery(CATALOG_LOADING_PAGE, loadCatalogWorker);
}

function* searchWorker({ location }) {
  try {
    yield put(showLocalLoader());
    const payload = yield call(searchCatalogFetched, location);
    yield put(searcCatalogLocationAction(payload));
    if (payload.data.length !== 0) {
      yield call(setItemToLocalStorage, 'where', location);
    }
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
    yield put(hideLocalLoader());
  }
}

function* loadCatalogWorker() {
  try {
    yield put(showLocalLoader());
    const location = yield call(getItemInLocalStorage, 'where');
    if (location) {
      const payload = yield call(searchCatalogFetched, location);
      yield put(searcCatalogLocationAction(payload));
    }
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
    yield put(hideLocalLoader());
  }
}
