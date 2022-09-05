import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/blockStatsAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";

// initialState
const initialState = {
  blockStats: {
    blocks: {},
    transactions: {},
  },
  channelList: [],
};

// ACTION TYPES
export const [CHANNEL_LIST, CHANNEL_LIST_SUCCESS, CHANNEL_LIST_FAILURE] =
  createRequestActionTypes("blockStats/CHANNEL_LIST");

export const [GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE] =
  createRequestActionTypes("blockStats/GET_DATA");

// ACTION CREATOR
export const actionChannelList = createAction(CHANNEL_LIST, (data) => data);
export const actionGetData = createAction(GET_DATA);

// Create Saga
const getChannelListSaga = createRequestSaga(CHANNEL_LIST, API.getChannelList);
const getDataSaga = createRequestSaga(GET_DATA, API.getStatsData);

// Main Saga
export function* blockStatsSaga() {
  yield takeEvery(GET_DATA, getDataSaga);
  yield takeEvery(CHANNEL_LIST, getChannelListSaga);
}

const blockStatsReducer = handleActions(
  {
    [CHANNEL_LIST_SUCCESS]: (state, { payload: data }) =>
      // console.log("channelData", data),
      produce(state, (draft) => ({
        ...draft,
        channelList: data,
      })),
    [CHANNEL_LIST_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => ({
        ...draft,
        blockStats: {
          channelList: {},
        },
      })),
    [GET_DATA_SUCCESS]: (state, { payload: data }) =>
      // console.log("data", data),
      produce(state, (draft) => ({
        ...draft,
        blockStats: {
          blocks: data.block,
          transactions: data.transaction,
        },
      })),
    [GET_DATA_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => ({
        ...draft,
        blockStats: {
          blocks: {},
          transactions: {},
        },
      })),
  },
  initialState
);

export default blockStatsReducer;
