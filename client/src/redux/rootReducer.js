import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loading from "./loading";

import auth, { authSaga } from "./AuthReducer";
import main from "./MainReducer";
import blockManager, { blockManagerSaga } from "./BlockManagerReducer.js";
import boardReducer, { boardSaga } from "./boardReducer";

const rootReducer = combineReducers({
  auth,
  main,
  blockManager,
  loading,
  boardReducer,
});

export function* rootSaga() {
  yield all([blockManagerSaga(), authSaga(), boardSaga()]);
}

export default rootReducer;
