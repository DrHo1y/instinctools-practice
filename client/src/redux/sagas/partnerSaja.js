import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addRoomsToFacility,
  createFacilitiesFetched,
  deleteFacilityById,
  getAllFacilitiesForUserFetched,
  updateFacilityFetched,
} from '../../api/facility';
import { getItemInLocalStorage } from '../../utils/localstorage';
import { errorAction, hideLocalLoader, setMessage, showLocalLoader } from '../actions/appAction';
import { createFacilityAction, getFacilityForPartnerAction } from '../actions/partnerAction';
import {
  FACILITY_ADD_ROOM_TO_FACILITY_CLICK,
  FACILITY_CREATE_CLICK,
  FACILITY_DELETE_FACILITY_CLICK,
  FACILITY_LOAD_FOR_PARTNER_LOADING,
  FACILITY_UPDATE_CLICK,
} from '../types';

export function* partnerWathcer() {
  yield takeLatest(FACILITY_CREATE_CLICK, createFacilityWorker);
  yield takeLatest(FACILITY_LOAD_FOR_PARTNER_LOADING, getFacilityForPartnerWorker);
  yield takeLatest(FACILITY_ADD_ROOM_TO_FACILITY_CLICK, addRoomsToFacilityWorker);
  yield takeLatest(FACILITY_UPDATE_CLICK, updateFacilityWorker);
  yield takeLatest(FACILITY_DELETE_FACILITY_CLICK, deleteFacilityByIdWorker);
}

function* createFacilityWorker({ form }) {
  try {
    yield put(showLocalLoader());
    const token = yield call(getItemInLocalStorage, 'token');
    const payload = yield call(createFacilitiesFetched, form, token);
    yield put(createFacilityAction(payload));
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
function* updateFacilityWorker({ form }) {
  try {
    yield put(showLocalLoader());
    const token = yield call(getItemInLocalStorage, 'token');
    const payload = yield call(updateFacilityFetched, form, token);
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
function* getFacilityForPartnerWorker() {
  try {
    yield put(showLocalLoader());
    const token = yield call(getItemInLocalStorage, 'token');
    const payload = yield call(getAllFacilitiesForUserFetched, token);
    yield put(getFacilityForPartnerAction(payload));
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
function* addRoomsToFacilityWorker({ form }) {
  try {
    yield put(showLocalLoader());
    const token = yield call(getItemInLocalStorage, 'token');
    const payload = yield call(addRoomsToFacility, form, token);
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
function* deleteFacilityByIdWorker({ id }) {
  try {
    yield put(showLocalLoader());
    const payload = yield call(deleteFacilityById, id);
    yield put(setMessage(payload.msg));
    yield put(hideLocalLoader());
  } catch (error) {
    yield put(errorAction(error));
  }
}
