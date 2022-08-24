import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loading from "./loading";

import auth, { authSaga } from "./AuthReducer";
import main from "./MainReducer";
import blockManager, { blockManagerSaga } from "./BlockManagerReducer.js";
import boardReducer, { boardSaga } from "./boardReducer";
import ethReducer, { ethSaga } from "./ethReducer";
import blockStatsReducer, { blockStatsSaga } from "./blockStatsReducer";

const rootReducer = combineReducers({
  loading,
  auth,
  main,
  blockManager,
  boardReducer,
  ethReducer,
  blockStatsReducer,
});

export function* rootSaga() {
  yield all([
    blockManagerSaga(),
    authSaga(),
    boardSaga(),
    ethSaga(),
    blockStatsSaga(),
  ]);
}

export default rootReducer;
