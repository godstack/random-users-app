import { throttle, put, delay } from 'redux-saga/effects';
import {
  showFetchingLoader,
  hideFetchingLoader,
  showSelectingLoader,
  hideSelectingLoader
} from '../actions';
import { FILTER_SELECTED_USERS, FILTER_FETCHED_USERS } from '../types';

function* filterFetchedSagaWorker(args) {
  yield put(showFetchingLoader());
  yield delay(250);
  yield put(hideFetchingLoader());
}

function* filterSelectedSagaWorker(args) {
  yield put(showSelectingLoader());
  yield delay(250);
  yield put(hideSelectingLoader());
}

export function* filterSagaWatcher() {
  yield throttle(250, FILTER_FETCHED_USERS, filterFetchedSagaWorker);
  yield throttle(250, FILTER_SELECTED_USERS, filterSelectedSagaWorker);
}
