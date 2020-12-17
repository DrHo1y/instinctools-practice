import { put, call, takeLatest } from 'redux-saga/effects'
import { authFetched, signinFetched, signupFetched } from '../../api/sign'
import {
  getItemInLocalStorage,
  removeItemInLocalStorage,
  setItemToLocalStorage,
} from '../../utils/localstorage'
import {
  signinAction,
  signoutAction,
  signupAction,
} from '../actions/userAction'
import {
  SIGN_SIGNIN_CLICK,
  SIGN_SIGNIN_WITH_TOKEN,
  SIGN_SIGNOUT_CLICK,
  SIGN_SIGNUP_CLICK,
} from '../types'

export function* signWatcher() {
  yield takeLatest(SIGN_SIGNUP_CLICK, signupWorker)
  yield takeLatest(SIGN_SIGNIN_CLICK, signinWorker)
  yield takeLatest(SIGN_SIGNIN_WITH_TOKEN, signinWithTokenWorker)
  yield takeLatest(SIGN_SIGNOUT_CLICK, signoutWorker)
}

function* signupWorker({ form }) {
  const payload = yield call(signupFetched, form)
  yield put(signupAction(payload))
}
function* signinWorker({ form }) {
  const payload = yield call(signinFetched, form)
  if (payload.token) {
    yield call(setItemToLocalStorage, 'token', payload.token)
  }
  yield put(signinAction(payload))
}
function* signoutWorker() {
  yield call(removeItemInLocalStorage, 'token')
  yield put(signoutAction())
}
function* signinWithTokenWorker() {
  const token = yield call(getItemInLocalStorage, 'token')
  if (token) {
    const payload = yield call(authFetched, token)
    if (payload.token) {
      yield call(setItemToLocalStorage, 'token', payload.token)
    }
    yield put(signinAction(payload))
  }
}
