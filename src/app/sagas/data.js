import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../actions/data';
import api from '../api';

function createGetData() {
  return function*() {
    // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getData());
      const action = { type: GET_DATA_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_DATA_ERROR, error };

      yield put(action);
    }
  };
}

export default function* getDataWatcher() {
  yield takeLatest(GET_DATA_START, createGetData());
}
