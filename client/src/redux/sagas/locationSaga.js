import { call, put, takeLatest } from 'redux-saga/effects';
import { getCityFetch } from '../../api/location';
import { errorAction, hideLoader, showLoaded } from '../actions/appAction';
import { loadCityAction } from '../actions/locationAction';
import { LOCATION_LOAD_CITY_LOADING } from '../types';

export function* loadingWatcher() {
  yield takeLatest(LOCATION_LOAD_CITY_LOADING, loadingCityWorker);
}

function* loadingCityWorker({ countryId }) {
  try {
    const payload = yield call(getCityFetch, countryId);
    yield put(loadCityAction(payload));
  } catch (error) {
    yield put(errorAction(error));
  }
}
