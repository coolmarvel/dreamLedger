import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/resourcesAPI";
import { takeEvery, takeLatest } from "redux-saga/effects";
import produce from "immer";

// ACTION TYPES
export const [CHANNEL_LIST, CHANNEL_LIST_SUCCESS, CHANNEL_LIST_FAILURE] =
  createRequestActionTypes("CHANNEL_LIST");

export const [
  RESOURCES_HISTORY,
  RESOURCES_HISTORY_SUCCESS,
  RESOURCES_HISTORY_FAILURE,
] = createRequestActionTypes("RESOURCES_HISTORY");

export const [
  RESOURCES_STATS,
  RESOURCES_STATS_SUCCESS,
  RESOURCES_STATS_FAILURE,
] = createRequestActionTypes("RESOURCES_STATS");

// ACTION CREATOR
export const actionChannelList = createAction(CHANNEL_LIST, (data) => data);
export const actionResourcesHistory = createAction(RESOURCES_HISTORY);
export const actionResourcesStats = createAction(RESOURCES_STATS);

// 파라메터가 있고 없고의 차이는?
// export const getDataAsync = createAction(GET_DATA_ASYNC, (data) => data);

// Create Saga
const channelListSaga = createRequestSaga(CHANNEL_LIST, API.getChannelList);
const resourcesHistorySaga = createRequestSaga(
  RESOURCES_HISTORY,
  API.getHistory
);
const resourcesStatsSaga = createRequestSaga(RESOURCES_STATS, API.getHistory); // 더미

// Main Saga
export function* resourcesSaga() {
  yield takeLatest(CHANNEL_LIST, channelListSaga);
  yield takeLatest(RESOURCES_HISTORY, resourcesHistorySaga);
  yield takeLatest(RESOURCES_STATS, resourcesStatsSaga);
}

const initialState = {
  channelList: [],
  historyData: [], // {count, datetime}
  statsData: [], // {count, datetime}
};

const resourcesReducer = handleActions(
  {
    // 체널 목록 조회
    [CHANNEL_LIST_SUCCESS]: (state, { payload: data }) => {
      return produce(state, (draft) => {
        draft["channelList"] = data.map((e) => e.name);
      });
    },
    [CHANNEL_LIST_FAILURE]: (state, { payload: data }) => {
      return produce(state, (draft) => {
        draft["channelList"] = null;
      });
    },
    // History 데이터 조회
    [RESOURCES_HISTORY_SUCCESS]: (state, { payload: data }) => {
      return produce(state, (draft) => {
        draft["historyData"] = data;
      });
    },
    [RESOURCES_HISTORY_FAILURE]: (state, { payload: data }) => {
      return produce(state, (draft) => {
        draft["historyData"] = null;
      });
    },
    // Stats 데이터 조회
    [RESOURCES_STATS_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["statsData"] = data;
      }),
    [RESOURCES_STATS_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["statsData"] = null;
      }),
  },
  initialState
);

export default resourcesReducer;
