import { call, put, takeLatest } from 'redux-saga/effects';
import { getCityFetch } from '../../api/location';
import { errorAction } from '../actions/appAction';
import { loadCityAction } from '../actions/locationAction';
import { LOCATION_LOAD_CITY_LOADING } from '../types';

export function* loadingWatcher() {
  yield takeLatest(LOCATION_LOAD_CITY_LOADING, loadingCityWorker);
}

export function* loadingCityWorker(country) {
  try {
    const payload = yield call(getCityFetch, country.countryId);
    yield put(loadCityAction(payload));
  } catch (error) {
    yield put(errorAction(error));
  }
}
