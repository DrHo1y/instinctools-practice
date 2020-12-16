import { put, call, takeLatest } from 'redux-saga/effects'
import { signinFetched, signupFetched } from '../../api/sign'
import { setItemToLocalStorage } from '../../utils/localstorage'
import { signinAction, signupAction } from '../actions/userAction'
import { SIGN_SIGNIN_CLICK, SIGN_SIGNUP_CLICK } from '../types'

export function* signWatcher() {
  yield takeLatest(SIGN_SIGNUP_CLICK, signupWorker)
  yield takeLatest(SIGN_SIGNIN_CLICK, signinWorker)
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
