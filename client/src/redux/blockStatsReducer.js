import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/blockStatsAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";

// initialState
const initialState = {
  blockStats: [{ blocks: [], transactions: [], channelList: [] }],
};

// ACTION TYPES
export const [BLOCK_STATS, BLOCK_STATS_SUCCESS, BLOCK_STATS_FAILURE] =
  createRequestActionTypes("BLOCK_STATS");

// ACTION CREATOR
export const blockStatsActionCreate = createAction(BLOCK_STATS, (data) => data);

// Create Saga
const getDataSaga = createRequestSaga(BLOCK_STATS, API.getAlldatas);

// Main Saga
export function* blockStatsSaga() {
  yield takeEvery(BLOCK_STATS, getDataSaga);
}

const blockStatsReducer = handleActions(
  {
    [BLOCK_STATS_SUCCESS]: (state, { payload: data }) =>
      // console.log("data", data),
      produce(state, (draft) => ({
        ...draft,
        blockStats: {
          blocks: data.map((v) => {
            return {
              channelName: v.channelList,
              data: { ...v.blocks, count: Math.floor(Math.random() * 50) },
            };
          }),
          transactions: data.map((v) => {
            return {
              channelName: v.channelList,
              data: { ...v.transaction, count: Math.floor(Math.random() * 50) },
            };
          }),
          channelList: data.map((v) => v.channelList),
        },
      })),
    [BLOCK_STATS_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => ({
        ...draft,
        blockStats: {
          blocks: null,
          transactions: null,
          channelList: null,
        },
      })),
  },
  initialState
);

export default blockStatsReducer;
