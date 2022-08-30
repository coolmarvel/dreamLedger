import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loading from "./loading";

import auth, { authSaga } from "./AuthReducer";
import main from "./MainReducer";
import blockManager, { blockManagerSaga } from "./BlockManagerReducer.js";
import dashboardReducer, { dashboardSaga } from "./dashboardReducer";
import blockStatsReducer, { blockStatsSaga } from "./blockStatsReducer";

const rootReducer = combineReducers({
  loading,
  auth,
  main,
  blockManager,
  dashboardReducer,
  blockStatsReducer,
});

export function* rootSaga() {
  yield all([
    blockManagerSaga(),
    authSaga(),
    dashboardSaga(),
    blockStatsSaga(),
  ]);
}

export default rootReducer;
