import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from './createRequestSaga';
import * as authAPI from '../api/BlockManagerApi';
import {element, number} from "prop-types";
import getUUID from "../api/commonlib";
import client from "../api/client";
import {block_manager_servers} from "../api/BlockManagerApi";


const CHANGE_FIELD = 'blockManagerReducer/CHANGE_FIELD';
const CHANGE_MAIN_MENU = 'blockManagerReducer/CHANGE_MAIN_MENU';

const CHANGE_INNER_FIELD = 'blockManagerReducer/CHANGE_INNER_FIELD';
const CHANGE_FILE_FIELD = 'blockManagerReducer/CHANGE_FILE_FIELD';
const CHANGE_DELETE_FILE_FIELD = 'blockManagerReducer/CHANGE_DELETE_FILE_FIELD';

const CHANGE_PORTFOLIO_FILE_FIELD = 'blockManagerReducer/CHANGE_PORTFOLIO_FILE_FIELD';



const ADD_SUB_FIELD = 'blockManagerReducer/ADD_SUB_FIELD';
const ADD_SUB_FILE_FIELD = 'blockManagerReducer/ADD_SUB_FILE_FIELD';

const REMOVE_SUB_FIELD = 'blockManagerReducer/REMOVE_SUB_FIELD';
const CHANGE_ARRAY_SUB_FIELD = 'blockManagerReducer/CHANGE_ARRAY_SUB_FIELD';



const CHANGE_SUB_FIELD = 'blockManagerReducer/CHANGE_SUB_FIELD';
const INITIALIZE_FORM = 'blockManagerReducer/INITIALIZE_FORM';
const INITIALIZE_FORM2 = 'blockManagerReducer/INITIALIZE_FORM2';

const [BLOCK_MANAGER_SERVERS, BLOCK_MANAGER_SERVERS_SUCCESS, BLOCK_MANAGER_SERVERS_FAILURE] = createRequestActionTypes(
  'blockManagerReducer/BLOCK_MANAGER_SERVERS'
);


const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'blockManagerReducer/LOGIN'
);

const [UPDATEPWD, UPDATEPWD_SUCCESS, UPDATEPWD_FAILURE] = createRequestActionTypes(
    'blockManagerReducer/UPDATEPWD'
);


const [DOWNLOAD_FILE, DOWNLOAD_FILE_SUCCESS, DOWNLOAD_FILE_FAILURE] = createRequestActionTypes(
    'user/DOWNLOAD_FILE',
);

const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes(
    'blockManagerReducer/LOGOUT'
);
const [SAVE, SAVE_SUCCESS, SAVE_FAILURE] = createRequestActionTypes(
    'blockManagerReducer/SAVE'
);



export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const changeMainMenu = createAction(
    CHANGE_MAIN_MENU,
    ({ form, value }) => ({
        form, // register , login
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
export const addSubField = createAction(
    ADD_SUB_FIELD,
    ({ form, key}) => ({
        form, // register , login
        key // username, password, passwordConfirm
    })
);
export const addSubFileField = createAction(
    ADD_SUB_FILE_FIELD,
    ({ form, key}) => ({
        form, // register , login
        key // username, password, passwordConfirm
    })
);

export const removeSubField = createAction(
    REMOVE_SUB_FIELD,
    ({ form, key}) => ({
        form, // register , login
        key // username, password, passwordConfirm
    })
);
export const changeArraySubField = createAction(
    CHANGE_ARRAY_SUB_FIELD,
    ({ form, key1, key2,value }) => ({
        form, // register , login
        key1, // username, password, passwordConfirm
        key2, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);


export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const initializeForm2 = createAction(INITIALIZE_FORM2, ({form,sub}) => ({form,sub})); // register / login
export const blockManagerServers = createAction(BLOCK_MANAGER_SERVERS);
export const login = createAction(LOGIN, ({ userId, password }) => ({
    userId,  password
}));

export const updatePassword = createAction(UPDATEPWD, ({ userId, curPassword, newPassword }) => ({
    userId, curPassword, newPassword
}));
export const downloadFile = createAction(DOWNLOAD_FILE, ({ fieldNames }) => ({
    fieldNames
}));

export const logout = createAction(LOGOUT, data => data);


export const save = createAction(SAVE, ({ formData }) => ({
    formData
}));

// saga 생성
const blockManagerServersSaga = createRequestSaga(BLOCK_MANAGER_SERVERS, authAPI.block_manager_servers);
// const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);
//
// const findIdSaga = createRequestSaga(FINDID, authAPI.findId);
// const findPasswordSaga = createRequestSaga(FINDPWD, authAPI.findPassword);
// const updateUserSaga = createRequestSaga(UPDATEUSER, authAPI.updateUser);
// const updatePasswordSaga = createRequestSaga(UPDATEPWD, authAPI.updatePassword);
// const retireMemberSaga = createRequestSaga(RETIREMEMBER, authAPI.retireMember);
// const existMemberSaga = createRequestSaga(EXISTMEMBER, authAPI.existMember);
//
// const searchSaga = createRequestSaga(SEARCH, authAPI.search);
// const loginSearchSaga = createRequestSaga(LOGINSEARCH, authAPI.search);
// const searchMemberSaga = createRequestSaga(SEARCH_MEMBER, authAPI.searchMember);
// const deleteMemberSaga = createRequestSaga(DELETE_MEMBER, authAPI.deleteMember);
// const downloadFileSaga = createRequestSaga(DOWNLOAD_FILE, authAPI.downloadFile);
//
// // const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
// const saveSaga = createRequestSaga(SAVE, authAPI.save);
// const searchCodeSaga = createRequestSaga(SEARCH_CODE, authAPI.searchCode);



export function* sampleSaga() {
    yield takeLatest(BLOCK_MANAGER_SERVERS, blockManagerServersSaga);

    // yield takeLatest(REGISTER, registerSaga);
    // yield takeLatest(LOGIN, loginSaga);
    //
    // yield takeLatest(FINDID, findIdSaga);
    // yield takeLatest(FINDPWD, findPasswordSaga);
    // yield takeLatest(UPDATEUSER, updateUserSaga);
    // yield takeLatest(UPDATEPWD, updatePasswordSaga);
    // yield takeLatest(RETIREMEMBER, retireMemberSaga);
    // yield takeLatest(EXISTMEMBER, existMemberSaga);
    // yield takeLatest(SEARCH, searchSaga);
    // yield takeLatest(LOGINSEARCH, loginSearchSaga);
    // // yield takeLatest(LOGOUT, logoutSaga);
    // yield takeLatest(SAVE, saveSaga);
    // yield takeLatest(SEARCH_CODE, searchCodeSaga);
    // yield takeLatest(SEARCH_MEMBER, searchMemberSaga);
    // yield takeLatest(DELETE_MEMBER, deleteMemberSaga);
    // yield takeLatest(DOWNLOAD_FILE, downloadFileSaga);
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

    openSideBar:{
        status:false
    },
    initializeMenuStatus:{
        status:false,
    },
    currentMainMenu:0,

    logout: {
        returnValue:null,
        error:null
    },

    save: {
        returnValue:null,
        error:null
    },


    blockManagerServers:{
        created_date:'',
        docker_port:'',
        gid:'',
        home_path:'',
        host_ip:'',
        modified_data:'',
        name:'',
        passwd:'',
        sftp_port:'',
        uid:'',
        user_name:'',
        serverName:[],
    },

    blockArchitecture:{
        physicalServers:[],
        organization:[],
        ca:[],
        orderer:[],
        peer:[],
        channel:[],
        confirm:[],

    },
    dashboard:{
        blocks:[],
        transactions:[],
        cpu:[],
        memory:[],
        storage:[],
        blockchainInfo:[],
        ledgerInfo:[],
        resourceInfo:[],
    },
    blockManager:{
        servers:{
            data:[
            ],
             returnValue:false,
             error:false
        },
        org:[],
        ordered:[],
        peer:[],
        channel:[],
        chaincode:[],
        caServers:[],
        caUsers:[],
    },
    blockHistory:{
        blocks:[],
        transations:[],
    },
    blockStats:{
        blockTransaction:[]
    },
    resource:{
        resourceHistory:[],
        resourceStats:[],
    },
    setting:{
        adminstrator:[],
        authority:[],
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

const SampleReducer = handleActions(
    {

        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        [INITIALIZE_FORM2]: (state, {payload: {form, sub}}) =>
            produce(state, draft => {
                draft[form][sub] = initialState[form][sub]; // 예: state.register.username을 바꾼다
            }),

        // 회원가입 성공
        [BLOCK_MANAGER_SERVERS_SUCCESS]: (state, {payload: data}) => produce(state, draft => {

            if(data != undefined  && data.result == 'success') {
                if(data.data.length > 0){
                    data.data.map(element => {
                        draft['blockManager']['servers']['data'].push({
                            id:element.id,
                            name:element.name,
                            userName:element.userName,
                            homePath:element.homePath,
                            passwd:element.passwd,
                            hostIp:element.hostIp,
                            sftpPort:element.sftpPort,
                            dockerPort:element.dockerPort,
                            uid:element.uid,
                            gid:element.gid,
                            createdDate:'',
                            modifiedData:'',
                        });
                    })
                }
                draft['blockManager']['servers'].error = false; // 예: state.register.username을 바꾼다
                draft['blockManager']['servers'].returnValue = true;
            }
            else {
                draft['blockManager']['servers'].error = true; // 예: state.register.username을 바꾼다
                draft['blockManager']['servers'].returnValue = false;
            }


        }),
        // 회원가입 실패
        [BLOCK_MANAGER_SERVERS_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['blockManager']['servers'].error = error; // 예: state.register.username을 바꾼다
            draft['blockManager']['servers'].returnValue = true;

        }),


        [CHANGE_MAIN_MENU]: (state, {payload: {form, value}}) =>
            produce(state, draft => {
                draft[form] = value; // 예: state.register.username을 바꾼다
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
        [CHANGE_FILE_FIELD]: (state, {payload: {form, fileId, key, seq, fieldId, value}}) =>
            produce(state, draft => {
                const index = draft[form].findIndex(element => (fileId === undefined && element.seq === seq));
                if (index !== -1) {
                    draft[form].splice(index, 1);
                }
                if (fileId === undefined) {
                    let fileObj = new Object();
                    fileObj.updateFile = value;
                    fileObj.key = key;
                    fileObj.seq = seq;
                    // fileObj.fieldId = fieldId;
                    draft[form].push(fileObj);
                } else {
                    draft[form].forEach(file => {
                        if (file.key === key) {
                            file.updateFile = value;
                            file.seq = seq;
                            file.id = fileId;
                            file.fieldId = fieldId;
                        }
                    });
                }

            }),
        [CHANGE_DELETE_FILE_FIELD]: (state, {payload: {form, fileId, key, value}}) =>
            produce(state, draft => {
                draft[form].forEach(file => {
                    if (file.key === key && file.id !== undefined) {
                        file.checkDelete = value;
                        file.id = fileId;
                    }
                });
            }),

        [CHANGE_PORTFOLIO_FILE_FIELD]: (state, {payload: {form, fileId, key, seq, fieldId, value}}) =>
            produce(state, draft => {
                draft[form].forEach(file => {
                    if (file.key === key) {
                        file.updateFile = value;
                        file.seq = seq;
                        file.fieldId = fieldId;
                        if (fileId !== undefined) {
                            file.id = fileId;
                        }
                    }
                });
            }),
        [CHANGE_SUB_FIELD]: (state, {payload: {form, key1, key2, value}}) =>
            produce(state, draft => {


                const element = draft[form].find(el => el.key === key1);

                element[key2] = value;


            }),
        [ADD_SUB_FILE_FIELD]: (state, {payload: {form, key}}) =>
            produce(state, draft => {
                const cnt = draft[form].length;
                draft[form].push({key: key, seq: cnt + 1});
            }),

        [ADD_SUB_FIELD]: (state, {payload: {form, key}}) =>
            produce(state, draft => {

                if (form === 'licenses') {
                    draft[form].push({
                        key: key,
                        name: '',
                        acquisitionMonth: '',
                        issuer: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'eduLevels') {
                    draft[form].push({
                        key: key,
                        schoolType: '',
                        schoolName: '',
                        admissionYear: '',
                        graduationYear: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'careers') {
                    draft[form].push({
                        key: key,
                        companyName: '',
                        partName: '',
                        employmentYear: '',
                        resignationYear: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'careerDescs') {
                    draft[form].push({key: key, descp: '', seq: draft[form].length + 1});
                } else if (form === 'activities') {
                    draft[form].push({
                        key: key,
                        corporateName: '',
                        startMonth: '',
                        endMonth: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'awards') {
                    draft[form].push({
                        key: key,
                        name: '',
                        institution: '',
                        year: '',
                        descp: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'coverLetters') {
                    draft[form].push({key: key, title: '', descp: '', seq: draft[form].length + 1});
                } else if (form === 'educations') {
                    draft[form].push({
                        key: key,
                        name: '',
                        institution: '',
                        startMonth: '',
                        endMonth: '',
                        seq: draft[form].length + 1
                    });
                } else if (form === 'portfolios') {
                    draft[form].push({key: key, url: '', seq: draft[form].length + 1});
                } else if (form === 'etcs') {
                    draft[form].push({
                        key: key,
                        name: '',
                        startMonth: '',
                        endMonth: '',
                        descp: '',
                        seq: draft[form].length + 1
                    });
                }
            }),

        [REMOVE_SUB_FIELD]: (state, {payload: {form, key}}) =>
            produce(state, draft => {
                // const index = draft[form].findIndex(element => element.key === key);
                // draft[form].splice(index, 1);
                draft[form].forEach((element) => {
                    if (element.key === key) {
                        element.deleteFlag = true;
                        element.updateFlag = null;
                    }
                })
            }),

        [CHANGE_ARRAY_SUB_FIELD]: (state, {payload: {form, key1, key2, value}}) =>
            produce(state, draft => {


                draft[form].forEach((element) => {
                    if (element.key === key1) {
                        element[key2] = value;
                        element.updateFlag = true;
                    }
                })

            }),





        // 로그인 성공
        [LOGIN_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft['auth'] = true; // 예: state.register.username을 바꾼다
                draft['userId'] = draft.login.userId
                draft['login']['error'] = null;
                draft['login']['returnValue'] = true
                if(data === undefined || data === null){
                    draft['auth'] = false; // 예: state.register.username을 바꾼다
                    draft['userId'] = null;
                    draft['login']['error'] = true;
                }
                else {
                    localStorage.setItem("Authorization",data);
                    draft['initializeMenuStatus']['status'] = true;
                }
            }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft['auth'] = false; // 예: state.register.username을 바꾼다
                draft['userId'] = null;
                draft['login']['error'] = error;
            }),
        [LOGOUT]: (state, {payload: data}) =>
            produce(state, draft => {
                draft['auth'] = false; // 예: state.register.username을 바꾼다
                draft['user'] = null;
                draft['logout']['error'] = false;
                draft['logout']['returnValue'] = 'success';
                draft['login']['error'] = false;
                draft['login']['returnValue'] = null;
                initReducerDatabase(draft);
            }),



        [SAVE_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['save']['returnValue'] = true;
            draft['save']['error'] = null;
        }),
        [SAVE_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['save']['returnValue'] = null;
            draft['save']['error'] = error;
        }),

        [UPDATEPWD_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['changePassword']['returnValue'] = 'success';
            draft['changePassword']['error'] = null;
        }),
        [UPDATEPWD_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['changePassword']['returnValue'] = null;
            draft['changePassword']['error'] = error;
        }),


        [DOWNLOAD_FILE_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['downloadFile']['returnValue'] = result;
            draft['downloadFile']['error'] = null;
        }),
        [DOWNLOAD_FILE_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['downloadFile']['error'] = error;
            draft['downloadFile'] = null;

        }),
    },
        initialState

);

export default SampleReducer;

