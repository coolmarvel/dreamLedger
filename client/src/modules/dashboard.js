import { createAction, createReducer } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import * as API from "../lib/api/dashboard";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

// Action Type
// const SEARCH_DATA_ASYNC = "SEARCH_DATA_ASYNC";
const [
  SEARCH_DATA_ASYNC,
  SEARCH_DATA_ASYNC_SUCCESS,
  SEARCH_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SEARCH_DATA_ASYNC");
const SEARCH_DATA = "SEARCH_DATA";

// Action Creator
// export const searchDataAsync = createAction(SEARCH_DATA_ASYNC);
export const searchDataAsync = createAction(SEARCH_DATA_ASYNC, (data) => data);
export const searchData = createAction(SEARCH_DATA);

const searchDataSaga = createRequestSaga(SEARCH_DATA_ASYNC, API.getData);

// Main Saga
export function* boardSaga() {
  yield takeEvery(SEARCH_DATA_ASYNC, searchDataSaga);
}

// // Search Saga
// export function* searchDataSaga() {
//   const response = yield call(API.getData);
//   yield put(searchData(response));
// }

// initState
const initialState = {
  dashboard: [],
  lastId: 0,
};

// Toolkit Reducer
export default createReducer(initialState, {
  [SEARCH_DATA]: (state, { payload: data }) => {
    state.dashboard.length = 0;
    for (let i = 0; i < data.length; i++) {
      state.dashboard.push({
        id: data[i].id,
        blocks: data[i].blocks,
        transactions: data[i].transactions,
        cpu: data[i].cpu,
        memory: data[i].memory,
        storage: data[i].storage,
        blockchainInfo: data[i].blockchainInfo,
        ledgerInfo: data[i].ledgerInfo,
        resourceInfo: data[i].resourceInfo,
      });
      if (i == data.length - 1) {
        state.lastId = data[i].id;
      }
    }
  },
  [SEARCH_DATA_ASYNC_SUCCESS]: (state, { payload: data }) => {
    state.dashboard.length = 0;
    for (let i = 0; i < data.length; i++) {
      state.dashboard.push({
        id: data[i].id,
        blocks: data[i].blocks,
        transactions: data[i].transactions,
        cpu: data[i].cpu,
        memory: data[i].memory,
        storage: data[i].storage,
        blockchainInfo: data[i].blockchainInfo,
        ledgerInfo: data[i].ledgerInfo,
        resourceInfo: data[i].resourceInfo,
      });
      if (i == data.length - 1) {
        state.lastId = data[i].id;
      }
    }
  },
  [SEARCH_DATA_ASYNC_FAILURE]: (state, { payload: data }) => {
    state.dashboard.length = 0;
  },
});
