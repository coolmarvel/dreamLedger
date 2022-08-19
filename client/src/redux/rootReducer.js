import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loading from "./loading";

import auth, { authSaga } from "./AuthReducer";
import main from "./MainReducer";
import blockManager, { blockManagerSaga } from "./BlockManagerReducer.js";
import boardReducer, { boardSaga } from "./boardReducer";
import ethReducer, { ethSaga } from './ethReducer'

const rootReducer = combineReducers({
  loading,
  auth,
  main,
  blockManager,
  boardReducer, ethReducer
});

export function* rootSaga() {
  yield all([blockManagerSaga(), authSaga(), boardSaga(), ethSaga()]);
}

export default rootReducer;
