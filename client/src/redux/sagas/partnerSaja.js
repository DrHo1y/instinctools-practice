import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { createFacilitiesFetched } from '../../api/facility';
import { getItemInLocalStorage } from '../../utils/localstorage';
import { errorAction } from '../actions/appAction';
import { createFacilityAction } from '../actions/partnerAction';
import { FACILITY_CREATE_CLICK } from '../types';

export function* partnerWathcer() {
  yield takeLatest(FACILITY_CREATE_CLICK, createFacilityWorker);
}

function* createFacilityWorker({ form }) {
  try {
    const token = yield call(getItemInLocalStorage, 'token');
    const payload = yield call(createFacilitiesFetched, form, token);
    yield put(createFacilityAction(payload));
  } catch (error) {
    yield put(errorAction());
  }
}
