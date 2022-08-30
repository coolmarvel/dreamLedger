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
  createRequestActionTypes("dashboard/DASHBOARD");

export const [SERVERS, SERVERS_SUCCESS, SERVERS_FAILURE] =
  createRequestActionTypes("dashboard/SERVERS");

export const [RESOURCES, RESOURCES_SUCCESS, RESOURCES_FAILURE] =
  createRequestActionTypes("dashboard/RESOURCES");

// ACTION CREATOR
export const searchData = createAction(SEARCH_DATA);
export const searchDataAsync = createAction(DASHBOARD, (data) => data);

export const getServersData = createAction(SERVERS, (data) => data);
export const getResourcesData = createAction(RESOURCES, (data) => data);

const initialState = {
  dashboard: [{ blocks: [], transactions: [] }],
  resources: [{ cpu: [], memory: [] }],
  network: [
    { ca: [], channel: [], orderer: [], orgs: [], peer: [], server: [] },
  ],
};

// Create Saga
const searchDataSaga = createRequestSaga(DASHBOARD, API.getData);
const getServersDataSaga = createRequestSaga(SERVERS, API.getServer);
const getResourcesDataSaga = createRequestSaga(RESOURCES, API.getResources);

// Main Saga
export function* dashboardSaga() {
  yield takeEvery(RESOURCES, getResourcesDataSaga);
  yield takeEvery(SERVERS, getServersDataSaga);
  yield takeEvery(DASHBOARD, searchDataSaga);
}

const dashboardReducer = handleActions(
  {
    [DASHBOARD_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => ({
        ...draft,
        dashboard: {
          blocks: data.map((v) => {
            return {
              totalPages: v.totalPages,
              size: v.size,
              numberOfElements: v.numberOfElements,
            };
          }),
          transactions: data.map((v) => {
            return {
              totalPages: v.totalPages,
              size: v.size,
              numberOfElements: v.numberOfElements,
            };
          }),
        },
      })),
    [DASHBOARD_FAILURE]: (state) =>
      produce(state, (draft) => ({
        ...draft,
        dashboard: { blocks: null, transactions: null },
      })),
    [RESOURCES_SUCCESS]: (state, { payload: data }) =>
      // console.log("data", data),
      produce(state, (draft) => ({
        ...draft,
        resources: {
          cpu: data.map((v) => {
            return {
              cpuPerc: v.cpuPerc,
              currentTime: v.currentTime,
              name: v.name,
            };
          }),
          memory: data.map((v) => {
            return {
              memPerc: v.memPerc,
              memUsage: v.memUsage,
              currentTime: v.currentTime,
              name: v.name,
            };
          }),
        },
      })),
    [RESOURCES_FAILURE]: (state) =>
      produce(state, (draft) => ({
        ...draft,
        resources: { cpu: null, memory: null },
      })),
  },
  initialState
);

export default dashboardReducer;
