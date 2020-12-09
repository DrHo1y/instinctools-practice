import { takeEvery, put, call } from 'redux-saga/effects'
import { CLICK, FETCH } from './types'

export function* sagaWatcher() {
  yield takeEvery(CLICK, sagaWorker)
}
function* sagaWorker() {
  const payload = yield call(fetchPost)
  yield put({ type: FETCH, payload })
}

async function fetchPost() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )
  return await response.json()
}
