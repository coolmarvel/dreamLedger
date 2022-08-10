import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from './createRequestSaga';
import * as authAPI from '../api/AuthApi.js';

import client from "../api/client";



const CHANGE_FIELD = 'authReducer/CHANGE_FIELD';


const CHANGE_INNER_FIELD = 'authReducer/CHANGE_INNER_FIELD';
const CHANGE_FILE_FIELD = 'authReducer/CHANGE_FILE_FIELD';
const CHANGE_DELETE_FILE_FIELD = 'authReducer/CHANGE_DELETE_FILE_FIELD';

const CHANGE_PORTFOLIO_FILE_FIELD = 'authReducer/CHANGE_PORTFOLIO_FILE_FIELD';



const CHANGE_SUB_FIELD = 'authReducer/CHANGE_SUB_FIELD';
const INITIALIZE_FORM = 'authReducer/INITIALIZE_FORM';
const INITIALIZE_FORM2 = 'authReducer/INITIALIZE_FORM2';


const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'authReducer/LOGIN'
);

const [UPDATEPWD, UPDATEPWD_SUCCESS, UPDATEPWD_FAILURE] = createRequestActionTypes(
    'authReducer/UPDATEPWD'
);



const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes(
    'authReducer/LOGOUT'
);



export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);

export const changeInnerField = createAction(
    CHANGE_INNER_FIELD,
    ({ form, key1, key2,value }) => ({
        form, // register , login
        key1, // username, password, passwordConfirm
        key2, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);
export const changeFileField = createAction(
    CHANGE_FILE_FIELD,
    ({ form, fileId,key,seq,fieldId,value }) => ({
        form, // register , login
        fileId,
        key, // username, password, passwordConfirm
        seq,
        fieldId,
        value // 실제 바꾸려는 값
    })
);
export const changeDeleteFileField = createAction(
    CHANGE_DELETE_FILE_FIELD,
    ({ form, fileId,key,seq,fieldId,value }) => ({
        form, // register , login
        fileId,
        key, // username, password, passwordConfirm
        seq,
        fieldId,
        value // 실제 바꾸려는 값
    })
);

export const changePortfolioFileField = createAction(
    CHANGE_PORTFOLIO_FILE_FIELD,
    ({ form, fileId,key,seq,fieldId,value }) => ({
        form, // register , login
        fileId,
        key, // username, password, passwordConfirm
        seq,
        fieldId,
        value // 실제 바꾸려는 값
    })
);

export const changeSubField = createAction(
    CHANGE_SUB_FIELD,
    ({ form, key1, key2,value }) => ({
        form, // register , login
        key1, // username, password, passwordConfirm
        key2, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);


export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const initializeForm2 = createAction(INITIALIZE_FORM2, ({form,sub}) => ({form,sub})); // register / login

export const login = createAction(LOGIN, ({ userId, password }) => ({
    userId,  password
}));

export const updatePassword = createAction(UPDATEPWD, ({ userId, curPassword, newPassword }) => ({
    userId, curPassword, newPassword
}));

export const logout = createAction(LOGOUT, data => data);


// saga 생성
const loginSaga = createRequestSaga(LOGIN, authAPI.login);



export function* authSaga() {


    // yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    //
    // yield takeLatest(FINDID, findIdSaga);
    // yield takeLatest(FINDPWD, findPasswordSaga);
    // yield takeLatest(UPDATEUSER, updateUserSaga);
    // yield takeLatest(UPDATEPWD, updatePasswordSaga);
    // yield takeLatest(RETIREMEMBER, retireMemberSaga);
    // yield takeLatest(EXISTMEMBER, existMemberSaga);

    // // yield takeLatest(LOGOUT, logoutSaga);

}


const initialState = {

    login: {
        userId: '',
        password: '',
        returnValue:null,
        error:null
    },

    changePassword: {
        curPassword:'',
        newPassword:'',
        newPassword1:'',
        returnValue:null,
        error:null
   },


    logout: {
        returnValue:null,
        error:null
    },




    baseUrl:  client.defaults.baseURL,//'http://10.10.40.150:8090',

};

const initReducerDatabase = (draft) =>{


    draft['auth']=false;
    draft['userId']=null;
    draft['search']['error'] = null;
    draft['search']['returnValue'] = null;
    draft['openSideBar']['status'] = false;
    draft['initializeMenuStatus']['status'] = true;


};

const auth = handleActions(
    {

        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        [INITIALIZE_FORM2]: (state, {payload: {form, sub}}) =>
            produce(state, draft => {
                draft[form][sub] = initialState[form][sub]; // 예: state.register.username을 바꾼다
            }),


        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
            produce(state, draft => {
                draft[form][key] = value; // 예: state.register.username을 바꾼다
                draft[form].updateFlag = true;
            }),
        [CHANGE_INNER_FIELD]: (state, {payload: {form, key1, key2, value}}) =>
            produce(state, draft => {
                draft[form][key1][key2] = value; // 예: state.register.username을 바꾼다
            }),

    },
        initialState

);

export default auth;

