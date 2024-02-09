import { spawn, all } from "redux-saga/effects";
import { watchUpdateOptions } from "./optionsSaga";

export default function* rootSaga() {
  yield all([spawn(watchUpdateOptions)]);
}
