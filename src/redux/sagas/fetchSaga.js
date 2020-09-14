import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_USERS, FETCH_USERS } from '../types';
import { showFetchingLoader, hideFetchingLoader } from '../actions';

export function* fetchSagaWatcher() {
  yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker() {
  yield put(showFetchingLoader());
  const payload = yield call(fetchUsers);

  yield put({ type: FETCH_USERS, payload });
  yield put(hideFetchingLoader());
}

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const json = await response.json();

  const users = json.results.map(el => ({
    ...el,
    isSelected: false,
    selectionTime: null
  }));

  return users;
}
