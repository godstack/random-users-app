import { takeEvery, throttle, put, delay } from 'redux-saga/effects';
import { showLoader, hideLoader } from '../actions';
import { FILTER_SELECTED_USERS } from '../types';

function* filterSagaWorker(args) {
  yield put(showLoader());
  yield delay(250);
  yield put(hideLoader());
}

export function* filterSagaWatcher() {
  yield throttle(250, FILTER_SELECTED_USERS, filterSagaWorker);
}
