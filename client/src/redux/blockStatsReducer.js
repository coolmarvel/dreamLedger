import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../api/blockStatsAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";

// ACTION TYPES
export const [GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE] =
  createRequestActionTypes("GET_DATA");

export const [GET_DATA_ASYNC, GET_DATA_ASYNC_SUCCESS, GET_DATA_ASYNC_FAILURE] =
  createRequestActionTypes("GET_DATA_ASYNC");

// ACTION CREATOR
export const getData = createAction(GET_DATA);
export const getDataAsync = createAction(GET_DATA_ASYNC, (data) => data);

const initialState = {
  blockStats: [],
};

// Create Saga
const getDataSaga = createRequestSaga(GET_DATA_ASYNC, API.getData);

// Main Saga
export function* blockStatsSaga() {
  yield takeEvery(GET_DATA_ASYNC, getDataSaga);
}

const blockStatsReducer = handleActions(
  {
    [GET_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        // console.log(data);
        draft["blockStats"] = data;
      }),
    [GET_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["blockStats"] = null;
      }),
  },
  initialState
);

export default blockStatsReducer;
