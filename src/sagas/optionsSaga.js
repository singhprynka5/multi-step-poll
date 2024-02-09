import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_OPTIONS_DATA,
  ADD_OPTIONS_DATA_SUCCESS,
  ADD_OPTIONS_DATA_FAILURE,
} from "../constants";
import { submitOptions } from "../api";

function* updateOptionsSaga({ payload }) {
  try {
    const data = yield call(submitOptions, payload);
    yield put({
      type: ADD_OPTIONS_DATA_SUCCESS,
      response: { ...payload, data },
    });
  } catch (error) {
    yield put({
      type: ADD_OPTIONS_DATA_FAILURE,
      response: { ...payload, error },
    });
  }
}

export function* watchUpdateOptions() {
  yield takeEvery(ADD_OPTIONS_DATA, updateOptionsSaga);
}
