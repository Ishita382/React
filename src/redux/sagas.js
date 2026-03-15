import { call, put, takeEvery } from "redux-saga/effects";
import { INCREMENT } from "./actionTypes";

function fetchUsersAPI() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

function* incrementSaga() {
  try {
    const users = yield call(fetchUsersAPI);
    yield put({ type: "INCREMENT" });
  } catch (error) {
    console.log(error);
  }
}

export function* rootSaga() {
  yield takeEvery("INCREMENT", incrementSaga);
}
