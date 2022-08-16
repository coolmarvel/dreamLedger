import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "./createRequestSaga";
import * as API from "../api/dashboardAPI";
import { takeEvery, takeLatest } from "redux-saga/effects";
import produce from "immer";

// ACTION TYPES
export const [SEARCH_DATA, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE] =
  createRequestActionTypes("SEARCH_DATA");

export const [
  SEARCH_DATA_ASYNC,
  SEARCH_DATA_ASYNC_SUCCESS,
  SEARCH_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SEARCH_DATA_ASYNC");

export const [
  SAVE_DATA_ASYNC,
  SAVE_DATA_ASYNC_SUCCESS,
  SAVE_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SAVE_DATA_ASYNC");

export const [
  REMOVE_DATA_ASYNC,
  REMOVE_DATA_ASYNC_SUCCESS,
  REMOVE_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("REMOVE_DATA_ASYNC");

// ACTION CREATOR
export const searchData = createAction(SEARCH_DATA);
export const searchDataAsync = createAction(SEARCH_DATA_ASYNC, (data) => data);
export const saveDataAsync = createAction(SAVE_DATA_ASYNC, (data, lastId) => ({
  data,
  lastId,
}));
export const removeDataAsync = createAction(REMOVE_DATA_ASYNC);

const initialState = {
  dashboard: [],
  lastId: 0,
};

// Create Saga
const searchDataSaga = createRequestSaga(SEARCH_DATA_ASYNC, API.getData);
const saveDataSaga = createRequestSaga(SAVE_DATA_ASYNC, API.postData);
const removeDataSaga = createRequestSaga(REMOVE_DATA_ASYNC, API.removeData);

// Main Saga
export function* boardSaga() {
  yield takeLatest(SEARCH_DATA_ASYNC, searchDataSaga);
  yield takeLatest(SAVE_DATA_ASYNC, saveDataSaga);
  yield takeLatest(REMOVE_DATA_ASYNC, removeDataSaga);
}

const boardReducer = handleActions(
  {
    [SEARCH_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        // console.log(data);
        draft["dashboard"] = data;
        for (let i = 0; i < data.length; i++) {
          if (i === data.length - 1) {
            draft["lastId"] = data[i].id;
          }
        }
      }),
    [SEARCH_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["dashbaord"] = null;
      }),
    [SAVE_DATA_ASYNC_SUCCESS]: (state, { payload: data, lastId }) =>
      produce(state, (draft) => {}),
    [SAVE_DATA_ASYNC_FAILURE]: (state, { payload: data, lastId }) =>
      produce(state, (draft) => {
        alert("error!");
      }),
    [SEARCH_DATA_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [SEARCH_DATA_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [REMOVE_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [REMOVE_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
  },
  initialState
);

export default boardReducer;
