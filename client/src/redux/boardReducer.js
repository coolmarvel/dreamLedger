import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from './createRequestSaga'
import * as API from "../api/dashboardAPI";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

// ACTION TYPES
export const [SEARCH_DATA, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE] =
  createRequestActionTypes("SEARCH_DATA");

export const [
  SEARCH_DATA_ASYNC,
  SEARCH_DATA_ASYNC_SUCCESS,
  SEARCH_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SEARCH_DATA_ASYNC");

// ACTION CREATOR
export const searchData = createAction(SEARCH_DATA);
export const searchDataAsync = createAction(SEARCH_DATA_ASYNC, (data) => data);

const initialState = {
  dashboard: [],
  blockstats: [],
};

// Create Saga
const searchDataSaga = createRequestSaga(SEARCH_DATA_ASYNC, API.getData);

// Main Saga
export function* boardSaga() {
  yield takeLatest(SEARCH_DATA_ASYNC, searchDataSaga);
}

const boardReducer = handleActions(
  {
    [SEARCH_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        // console.log(data);
        draft["dashboard"] = data;
        draft["blockstats"] = data;
      }),
    [SEARCH_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["dashbaord"] = null;
        draft["blockstats"] = null;
      }),
  },
  initialState
);

export default boardReducer;
