import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { dashboardAPI } from "../lib/api/dashboard";

const DASHBOARD = "DASHBOARD";

export const dashboardData = createAction(DASHBOARD, (data) => data);

// export const dashboardData = createAction(DASHBOARD, ({ form, value }) => ({
//   form,
//   value,
// }));

const initialState = {
  dashboard: {
    blocks: [],
    transactions: [],
    cpu: [],
    memory: [],
    storage: [],
    blockchainInfo: [],
    ledgerInfo: [],
    resourceInfo: [],
  },
};

// saga 생성
const dashboardDataSaga = createRequestSaga(DASHBOARD, dashboardAPI);

export function* dashboardSaga() {
  yield takeLatest(DASHBOARD, dashboardDataSaga);
}

const dashboard = handleActions(
  {
    [DASHBOARD]: (state, { payload: data }) => ({
      ...state,
      [data]: initialState[data],
    }),

    // [DASHBOARD]: (state, { payload: { form, value } }) =>
    //   produce(state, (draft) => {
    //     draft[form] = value; // 예: state.register.username을 바꾼다
    //   }),
  },
  initialState
);

export default dashboard;
