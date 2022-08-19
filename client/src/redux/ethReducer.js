import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from './createRequestSaga'
import * as API from "../api/dashboardAPI";
import { takeEvery } from "redux-saga/effects";
import produce from "immer";


export const [
    GET_DATA_ASYNC,
    GET_DATA_ASYNC_SUCCESS,
    GET_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("GET_DATA_ASYNC");

export const getDataAsync = createAction(GET_DATA_ASYNC, (data) => data);

const initialState = {
    eth: [],
};

const getDataSaga = createRequestSaga(GET_DATA_ASYNC, API.getEth)

export function* ethSaga() {
    yield takeEvery(GET_DATA_ASYNC, getDataSaga);
}

const ethReducer = handleActions({
    [GET_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
        produce(state, (draft) => {
            // console.log(data);
            draft["eth"] = data;
        }),
    [GET_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
        produce(state, (draft) => {
            draft["eth"] = null;
        }),
}, initialState)

export default ethReducer