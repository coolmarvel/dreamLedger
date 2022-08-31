import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/blockStatsAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";

// initialState
const initialState = {
  blockStats: [{ blocks: [], transactions: [] }],
};

// ACTION TYPES
export const [BLOCK_STATS, BLOCK_STATS_SUCCESS, BLOCK_STATS_FAILURE] =
  createRequestActionTypes("BLOCK_STATS");

// ACTION CREATOR
export const blockStatsActionCreate = createAction(BLOCK_STATS, (data) => data);

// Create Saga
const getDataSaga = createRequestSaga(BLOCK_STATS, API.getData);

// Main Saga
export function* blockStatsSaga() {
  yield takeEvery(BLOCK_STATS, getDataSaga);
}

const blockStatsReducer = handleActions(
  {
    [BLOCK_STATS_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        // console.log(data);
        draft["blockStats"] = data;
      }),
    [BLOCK_STATS_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["blockStats"] = null;
      }),
  },
  initialState
);

export default blockStatsReducer;
