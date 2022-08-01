import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import dashboard, { dashboardSaga } from "./dashboard";

const rootReducer = combineReducers({
  dashboard,
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga(), dashboardSaga()]);
}

export default rootReducer;
