import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  authFetched,
  partnerSigninFetched,
  partnerSignupFetched,
  signinFetched,
  signupFetched,
} from '../../api/sign';
import {
  getItemInLocalStorage,
  removeItemInLocalStorage,
  setItemToLocalStorage,
} from '../../utils/localstorage';
import { hideLoader, showLoaded } from '../actions/appAction';
import {
  partnerSigninAction,
  signinAction,
  signinErrorAction,
  signoutAction,
  signupAction,
} from '../actions/userAction';
import {
  INITIAL,
  PARTNER_SIGNIN_CLICK,
  PARTNER_SIGNUP_CLICK,
  SIGN_SIGNIN_CLICK,
  SIGN_SIGNIN_WITH_TOKEN,
  SIGN_SIGNOUT_CLICK,
  SIGN_SIGNUP_CLICK,
} from '../types';

export function* signWatcher() {
  yield takeEvery(INITIAL, initialWorker);
  yield takeLatest(SIGN_SIGNUP_CLICK, signupWorker);
  yield takeLatest(SIGN_SIGNIN_CLICK, signinWorker);
  yield takeLatest(SIGN_SIGNIN_WITH_TOKEN, signinWithTokenWorker);
  yield takeLatest(SIGN_SIGNOUT_CLICK, signoutWorker);
  yield takeLatest(PARTNER_SIGNUP_CLICK, partnerSignupWorker);
  yield takeLatest(PARTNER_SIGNIN_CLICK, partnerSigninWorker);
}

function* initialWorker() {
  yield put(showLoaded());
  const token = yield call(getItemInLocalStorage, 'token');
  if (!token) {
    yield put(hideLoader());
  }
}

function* signupWorker({ form }) {
  const payload = yield call(signupFetched, form);
  yield put(signupAction(payload));
}
function* signinWorker({ form }) {
  const payload = yield call(signinFetched, form);
  if (payload.token) {
    yield call(setItemToLocalStorage, 'token', payload.token);
    yield put(signinAction(payload));
  } else {
    yield put(signinErrorAction(payload));
  }
}
function* signoutWorker() {
  yield call(removeItemInLocalStorage, 'token');
  yield put(signoutAction());
}
function* signinWithTokenWorker() {
  // try
  const token = yield call(getItemInLocalStorage, 'token');
  if (token) {
    yield put(showLoaded());
    const payload = yield call(authFetched, token);
    if (payload.token) {
      yield call(setItemToLocalStorage, 'token', payload.token);
      if (payload.user.isPartner) {
        yield put(partnerSigninAction(payload));
      } else {
        yield put(signinAction(payload));
      }
      yield put(hideLoader());
    }
  }
}

function* partnerSignupWorker({ form }) {
  const payload = yield call(partnerSignupFetched, form);
  yield console.log(payload);
}
function* partnerSigninWorker({ form }) {
  const payload = yield call(partnerSigninFetched, form);
  if (payload.token && payload.isPartner) {
    yield call(setItemToLocalStorage, 'token', payload.token);
    yield put(partnerSigninAction(payload));
  } else {
    yield put(signinErrorAction(payload));
  }
}
