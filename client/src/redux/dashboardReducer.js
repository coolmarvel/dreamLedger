import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/dashboardAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";

// ACTION TYPES
export const [SEARCH_DATA, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE] =
  createRequestActionTypes("SEARCH_DATA");

export const [DASHBOARD, DASHBOARD_SUCCESS, DASHBOARD_FAILURE] =
  createRequestActionTypes("DASHBOARD");

export const [SERVERS, SERVERS_SUCCESS, SERVERS_FAILURE] =
  createRequestActionTypes("dashboard/SERVERS");

// ACTION CREATOR
export const searchData = createAction(SEARCH_DATA);
export const searchDataAsync = createAction(DASHBOARD, (data) => data);

export const getServersData = createAction(SERVERS, (data) => data);

const initialState = {
  dashboard: [{ blocks: [], transactions: [] }],
  servers: [],
};

// Create Saga
const searchDataSaga = createRequestSaga(DASHBOARD, API.getBTC);
const getServersDataSaga = createRequestSaga(SERVERS, API.getServer);

// Main Saga
export function* dashboardSaga() {
  yield takeEvery(DASHBOARD, searchDataSaga);
  yield takeEvery(SERVERS, getServersDataSaga);
}

const dashboardReducer = handleActions(
  {
    [DASHBOARD_SUCCESS]: (state, { payload: data }) =>
      // console.log(data);
      produce(state, (draft) => ({
        ...draft,
        dashboard: { blocks: data, transactions: data },
      })),
    [DASHBOARD_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => ({
        ...draft,
        dashboard: { blocks: null, transactions: null },
      })),
    [SERVERS_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        console.log(data);
        draft["servers"] = data;
      }),
    [SERVERS_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["servers"] = null;
      }),
  },
  initialState
);

export default dashboardReducer;
