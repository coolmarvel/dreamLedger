import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import boardReducer, { boardSaga } from "./dashboard";

const rootReducer = combineReducers({
  boardReducer,
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga(), boardSaga()]);
}

export default rootReducer;
