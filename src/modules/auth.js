import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import {element, number} from "prop-types";
import getUUID from "../lib/api/commonlib";
import client from "../lib/api/client";


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_MAIN_MENU = 'auth/CHANGE_MAIN_MENU';

const CHANGE_INNER_FIELD = 'auth/CHANGE_INNER_FIELD';
const CHANGE_FILE_FIELD = 'auth/CHANGE_FILE_FIELD';
const CHANGE_DELETE_FILE_FIELD = 'auth/CHANGE_DELETE_FILE_FIELD';

const CHANGE_PORTFOLIO_FILE_FIELD = 'auth/CHANGE_PORTFOLIO_FILE_FIELD';



const ADD_SUB_FIELD = 'auth/ADD_SUB_FIELD';
const ADD_SUB_FILE_FIELD = 'auth/ADD_SUB_FILE_FIELD';

const REMOVE_SUB_FIELD = 'auth/REMOVE_SUB_FIELD';
const CHANGE_ARRAY_SUB_FIELD = 'auth/CHANGE_ARRAY_SUB_FIELD';



const CHANGE_SUB_FIELD = 'auth/CHANGE_SUB_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);
const [FINDID, FINDID_SUCCESS, FINDID_FAILURE] = createRequestActionTypes(
    'auth/FINDID'
);
const [FINDPWD, FINDPWD_SUCCESS, FINDPWD_FAILURE] = createRequestActionTypes(
    'auth/FINDPWD'
);
const [UPDATEUSER, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE] = createRequestActionTypes(
    'auth/UPDATEUSER'
);
const [UPDATEPWD, UPDATEPWD_SUCCESS, UPDATEPWD_FAILURE] = createRequestActionTypes(
    'auth/UPDATEPWD'
);
const [RETIREMEMBER, RETIREMEMBER_SUCCESS, RETIREMEMBER_FAILURE] = createRequestActionTypes(
    'auth/RETIREMEMBER'
);
const [EXISTMEMBER, EXISTMEMBER_SUCCESS, EXISTMEMBER_FAILURE] = createRequestActionTypes(
    'auth/EXISTMEMBER'
);



const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] = createRequestActionTypes(
    'user/SEARCH',
);
const [LOGINSEARCH, LOGINSEARCH_SUCCESS, LOGINSEARCH_FAILURE] = createRequestActionTypes(
    'user/LOGINSEARCH',
);
const [SEARCH_MEMBER, SEARCH_MEMBER_SUCCESS, SEARCH_MEMBER_FAILURE] = createRequestActionTypes(
    'user/SEARCH_MEMBER',
);
const [DELETE_MEMBER, DELETE_MEMBER_SUCCESS, DELETE_MEMBER_FAILURE] = createRequestActionTypes(
    'user/DELETE_MEMBER',
);
const [DOWNLOAD_FILE, DOWNLOAD_FILE_SUCCESS, DOWNLOAD_FILE_FAILURE] = createRequestActionTypes(
    'user/DOWNLOAD_FILE',
);

const [SEARCH_CODE, SEARCH_CODE_SUCCESS, SEARCH_CODE_FAILURE] = createRequestActionTypes(
    'user/SEARCH_CODE',
);
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes(
    'auth/LOGOUT'
);
const [SAVE, SAVE_SUCCESS, SAVE_FAILURE] = createRequestActionTypes(
    'auth/SAVE'
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
export const register = createAction(REGISTER, ({ userName, userId, password, emailId,emailDomain,validPeriod}) => ({
    userName, userId, password, emailId,emailDomain,validPeriod
}));
export const login = createAction(LOGIN, ({ userId, password }) => ({
    userId,  password
}));

export const findId = createAction(FINDID, ({ userName, email }) => ({
    userName, email
}));
export const findPwd = createAction(FINDPWD, ({ userId,  userName, email  }) => ({
    userId,  userName, email
}));
export const updateUser = createAction(UPDATEUSER, ({ userName,userId, emailId,emailDomain,validPeriod  }) => ({
    userName,userId, emailId,emailDomain,validPeriod
}));
export const updatePassword = createAction(UPDATEPWD, ({ userId, curPassword, newPassword }) => ({
    userId, curPassword, newPassword
}));
export const retireMember = createAction(RETIREMEMBER, ({ userId, state }) => ({
    userId,  state
}));
export const existMember = createAction(EXISTMEMBER, ({ userId, password }) => ({
    userId,  password
}));
export const search = createAction(SEARCH, ({ userId, password }) => ({
    userId,  password
}));
export const loginSearch = createAction(LOGINSEARCH, ({ userId, password }) => ({
    userId,  password
}));
export const searchMember = createAction(SEARCH_MEMBER, (
    { regDateStart, regDateEnd,birthdayStart,birthdayEnd,memberId,member_student_name,member_student_sex,edulevel_schoolName,edulevel_schoolType,page,psize}) => ({
    regDateStart, regDateEnd,birthdayStart,birthdayEnd,memberId, member_student_name,member_student_sex,edulevel_schoolName,edulevel_schoolType,page,psize
}));
export const deleteMember = createAction(DELETE_MEMBER, ({ idList }) => ({
    idList
}));
export const downloadFile = createAction(DOWNLOAD_FILE, ({ fieldNames }) => ({
    fieldNames
}));
export const searchCode = createAction(SEARCH_CODE, ({ codeTypeName }) => ({
    codeTypeName
}));

export const logout = createAction(LOGOUT, data => data);


export const save = createAction(SAVE, ({ formData }) => ({
    formData
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

const findIdSaga = createRequestSaga(FINDID, authAPI.findId);
const findPasswordSaga = createRequestSaga(FINDPWD, authAPI.findPassword);
const updateUserSaga = createRequestSaga(UPDATEUSER, authAPI.updateUser);
const updatePasswordSaga = createRequestSaga(UPDATEPWD, authAPI.updatePassword);
const retireMemberSaga = createRequestSaga(RETIREMEMBER, authAPI.retireMember);
const existMemberSaga = createRequestSaga(EXISTMEMBER, authAPI.existMember);

const searchSaga = createRequestSaga(SEARCH, authAPI.search);
const loginSearchSaga = createRequestSaga(LOGINSEARCH, authAPI.search);
const searchMemberSaga = createRequestSaga(SEARCH_MEMBER, authAPI.searchMember);
const deleteMemberSaga = createRequestSaga(DELETE_MEMBER, authAPI.deleteMember);
const downloadFileSaga = createRequestSaga(DOWNLOAD_FILE, authAPI.downloadFile);

// const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const saveSaga = createRequestSaga(SAVE, authAPI.save);
const searchCodeSaga = createRequestSaga(SEARCH_CODE, authAPI.searchCode);



export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);

    yield takeLatest(FINDID, findIdSaga);
    yield takeLatest(FINDPWD, findPasswordSaga);
    yield takeLatest(UPDATEUSER, updateUserSaga);
    yield takeLatest(UPDATEPWD, updatePasswordSaga);
    yield takeLatest(RETIREMEMBER, retireMemberSaga);
    yield takeLatest(EXISTMEMBER, existMemberSaga);
    yield takeLatest(SEARCH, searchSaga);
    yield takeLatest(LOGINSEARCH, loginSearchSaga);
    // yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(SAVE, saveSaga);
    yield takeLatest(SEARCH_CODE, searchCodeSaga);
    yield takeLatest(SEARCH_MEMBER, searchMemberSaga);
    yield takeLatest(DELETE_MEMBER, deleteMemberSaga);
    yield takeLatest(DOWNLOAD_FILE, downloadFileSaga);
}


const initialState = {
    register: {
        userId: '',
        userName: '',
        password: '',
        passwordConfirm: '',
        emailId: '',
        emailDomain: '',
        validPeriod: 'WITHDRAWAL',
        returnValue:null,
        error:null
    },
    login: {
        userId: '',
        password: '',
        returnValue:null,
        error:null
    },
    findId:{
        userName:'',
        emailId: '',
        emailDomain: '',
        returnValue:null,
        error:null
    },
    findPassword: {
        userId: '',
        userName: '',
        emailId: '',
        emailDomain: '',
        returnValue:null,
        error:null
    },
    updateUser:{
        userName:'',
        emailId: '',
        emailDomain: '',
        validPeriod:'WITHDRAWAL',
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
    retireMember: {
        state:'',
        returnValue:null,
        error:null
    },
    existMember: {
        password:'',
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
    studyHistoryStatus:{
        edulevel:false, //학력정보
        studentlifedesc:false, //생활기록부
        career:false,//경력
        careerdesc:false,//경력기술서
        activity:false,//인턴/대외활동
        license:false,//자격증
        award:false,//수상실정
        coverletter:false,//자기소개서
        education:false,//교육
        portfolio:false,//포트폴리오
        psychometry:false,//청소년심리검사
        etc:false,//기타
    },

    changeInfoStatus:{
        chageMemberInfo:false, //학력정보
        changePasword:false, //생활기록부
        retireMember:false,//경력
    },
    logout: {
        returnValue:null,
        error:null
    },
    search: {
        returnValue:null,
        error:null
    },
    loginSearch: {
        returnValue:null,
        error:null
    },
    save: {
        returnValue:null,
        error:null
    },
    deleteMember: {
        returnValue:null,
        error:null
    },
    downloadFile: {
        returnValue:null,
        error:null
    },
    search_member: {
        regDateStart: '',
        regDateEnd: '',
        birthdayStart: '',
        birthdayEnd: '',
        memberId: '',
        member_student_name: '',
        member_student_sex: '',
        edulevel_schoolName: '',
        edulevel_schoolType: '',
        page:'1',
        psize:'5',
        returnValue:null,
        error:null
    },

    userId:null,
    userName:null,
    auth: null,
    // authError: null,
    user: null,
    // searchError: null,

    member:{
        id:'',
        type:'',// 회원 구분(핛생, 교사, 승인 교사)[ [STUDENT]핛생, [TEACHER]교사, [APPROVAL_TEACHER]승인 교사 ]
        userType:'',  //사용자 구분(사용자, 관리자) [ [USER]사용자, [ADMIN]관리자 ]
        name:'',//
        email:'',//
        expirationDate:'' //개인정보 유효기간(1년, 3년, 회원 탈퇴시) [ [ONE_YEAR]1년, [THREE_YEARS]3년, [WITHDRAWAL]회원 탈퇴시 ]
    },
    student:
    {
            descp:'',
            birthday:'',
            sex:'',
            phoneNumber:'',
            mobileNumber:'',
            address:'',
            file:'',
    },
    licenses:[],
    eduLevels:[],
    careers:[],
    careerDescs:[],
    activities:[],
    awards:[],
    coverLetters:[],
    educations:[],
    portfolios:[],

    etcs:[],

    licensesFiles:[],
    studentFile:[],
    studentLifeFile:[],
    careerDescFiles:[],
    awardsFiles:[],
    portfolioFiles:[],
    psychometryFiles:[],

    display:{refresh:false},
    typeCodeArray:[],

    temparary:{
        zipcode:'',
        address:'',
        detailAddress:''
    },
    baseUrl:  client.defaults.baseURL,//'http://10.10.40.150:8090',


    member_list:null,


};

const initReducerDatabase = (draft) =>{


    draft['member'] = {
        id:'',
            type:'',// 회원 구분(핛생, 교사, 승인 교사)[ [STUDENT]핛생, [TEACHER]교사, [APPROVAL_TEACHER]승인 교사 ]
            userType:'',  //사용자 구분(사용자, 관리자) [ [USER]사용자, [ADMIN]관리자 ]
            name:'',//
            email:'',//
            expirationDate:'' //개인정보 유효기간(1년, 3년, 회원 탈퇴시) [ [ONE_YEAR]1년, [THREE_YEARS]3년, [WITHDRAWAL]회원 탈퇴시 ]
    };
    draft['student'] =
    {
        descp:'',
        birthday:'',
        sex:'',
        phoneNumber:'',
        mobileNumber:'',
        address:'',
        file:'',
    };

    draft['auth']=false;
    draft['userId']=null;
    draft['search']['error'] = null;
    draft['search']['returnValue'] = null;
    draft['loginSearch']['error'] = null;
    draft['loginSearch']['returnValue'] = null;

    draft['openSideBar']['status'] = false;
    draft['initializeMenuStatus']['status'] = true;

    draft['studyHistoryStatus']['edulevel'] = false;
    draft['studyHistoryStatus']['studentlifedesc'] = false;
    draft['studyHistoryStatus']['career'] = false;
    draft['studyHistoryStatus']['careerdesc'] = false;
    draft['studyHistoryStatus']['activity'] = false;
    draft['studyHistoryStatus']['license'] = false;
    draft['studyHistoryStatus']['award'] = false;
    draft['studyHistoryStatus']['coverletter'] = false;
    draft['studyHistoryStatus']['education'] = false;
    draft['studyHistoryStatus']['portfolio'] = false;
    draft['studyHistoryStatus']['psychometry'] = false;
    draft['studyHistoryStatus']['etc'] = false;

    draft['changeInfoStatus']['chageMemberInfo'] = false;
    draft['changeInfoStatus']['changePasword'] = false;
    draft['changeInfoStatus']['retireMember'] = false;
    draft['studentFile']=[];
    draft['studentLifeFile']=[];
    draft['careerDescFiles']=[];
    draft['licensesFiles']=[];
    draft['awardsFiles']=[];
    draft['portfolioFiles']=[];
    draft['psychometryFiles']=[];

    draft['student'].updateFlag = undefined;
    draft['studentFile'].updateFlag = undefined;
    draft['studentLifeFile'].updateFlag = undefined;
    draft['careerDescFiles'].updateFlag = undefined;
    draft['licensesFiles'].updateFlag = undefined;
    draft['awardsFiles'].updateFlag = undefined;
    draft['portfolioFiles'].updateFlag = undefined;
    draft['psychometryFiles'].updateFlag = undefined;

    draft['student'].deleteFlag = undefined;
    draft['studentFile'].deleteFlag = undefined;
    draft['studentLifeFile'].deleteFlag = undefined;
    draft['careerDescFiles'].deleteFlag = undefined;
    draft['licensesFiles'].deleteFlag = undefined;
    draft['awardsFiles'].deleteFlag = undefined;
    draft['portfolioFiles'].deleteFlag = undefined;
    draft['psychometryFiles'].deleteFlag = undefined;

    draft['eduLevels']=[];
    draft['licenses']=[];
    draft['careers']=[];
    draft['careerDescs']=[];
    draft['activities']=[];
    draft['awards']=[];
    draft['coverLetters']=[];
    draft['educations']=[];
    draft['portfolios']=[];
    draft['etcs']=[];


    draft['eduLevels'].updateFlag = undefined;
    draft['licenses'].updateFlag = undefined;
    draft['careers'].updateFlag = undefined;
    draft['careerDescs'].updateFlag = undefined;
    draft['activities'].updateFlag = undefined;
    draft['awards'].updateFlag = undefined;
    draft['coverLetters'].updateFlag = undefined;
    draft['educations'].updateFlag = undefined;
    draft['portfolios'].updateFlag = undefined;
    draft['etcs'].updateFlag = undefined;

    draft['eduLevels'].deleteFlag = undefined;
    draft['licenses'].deleteFlag = undefined;
    draft['careers'].deleteFlag = undefined;
    draft['careerDescs'].deleteFlag = undefined;
    draft['activities'].deleteFlag = undefined;
    draft['awards'].deleteFlag = undefined;
    draft['coverLetters'].deleteFlag = undefined;
    draft['educations'].deleteFlag = undefined;
    draft['portfolios'].deleteFlag = undefined;
    draft['etcs'].deleteFlag = undefined;
};

const auth = handleActions(
    {
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


        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        // 회원가입 성공
        [REGISTER_SUCCESS]: (state, {payload: data}) => produce(state, draft => {
            draft['register']['error'] = null; // 예: state.register.username을 바꾼다
            draft['register']['returnValue'] = data;
        }),
        // 회원가입 실패
        [REGISTER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['register']['error'] = error; // 예: state.register.username을 바꾼다
            draft['register']['returnValue'] = null;
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

                    draft['studyHistoryStatus']['edulevel'] = false;
                    draft['studyHistoryStatus']['studentlifedesc'] = false;
                    draft['studyHistoryStatus']['career'] = false;
                    draft['studyHistoryStatus']['careerdesc'] = false;
                    draft['studyHistoryStatus']['activity'] = false;
                    draft['studyHistoryStatus']['license'] = false;
                    draft['studyHistoryStatus']['award'] = false;
                    draft['studyHistoryStatus']['coverletter'] = false;
                    draft['studyHistoryStatus']['education'] = false;
                    draft['studyHistoryStatus']['portfolio'] = false;
                    draft['studyHistoryStatus']['psychometry'] = false;
                    draft['studyHistoryStatus']['etc'] = false;

                    draft['changeInfoStatus']['chageMemberInfo'] = false;
                    draft['changeInfoStatus']['changePasword'] = false;
                    draft['changeInfoStatus']['retireMember'] = false;
                }



            }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft['auth'] = false; // 예: state.register.username을 바꾼다
                draft['userId'] = null;
                draft['login']['error'] = error;
            }),
        [SEARCH_CODE_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                if (data.length > 0) {
                    const typeCodeArray = [];
                    data.forEach((element) => {
                        const item = new Object();
                        item.id = element.id;
                        item.name = element.name;
                        typeCodeArray.push(item);
                    })
                    draft['typeCodeArray'] = typeCodeArray;
                }

            }),

        [SEARCH_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft['user'] = data;
                draft['search']['error'] = null;
                draft['search']['returnValue'] = data;

                draft['member']['id'] = data.id;
                draft['member']['type'] = data.type;
                draft['member']['name'] = data.name;
                draft['member']['email'] = data.email;
                draft['member']['expirationDate'] = data.expirationDate;
                if (data.student !== undefined) {
                    draft['student']['id'] = data.student.id;
                    draft['student']['seq'] = data.student.seq;
                    draft['student']['fieldId'] = data.student.id;
                    draft['student']['fileId'] = data.student.fileId;
                    draft['student']['descp'] = data.student.descp;
                    draft['student']['birthday'] = data.student.birthday;
                    draft['student']['sex'] = data.student.sex;
                    draft['student']['phoneNumber'] = data.student.phoneNumber;
                    draft['student']['mobileNumber'] = data.student.mobileNumber;
                    draft['student']['address'] = data.student.address;
                } else {
                    draft['student']['seq'] = undefined;
                    draft['student']['fieldId'] = undefined;
                    draft['student']['fileId'] = undefined;
                    draft['student']['descp'] = undefined;
                    draft['student']['birthday'] = undefined;
                    draft['student']['sex'] = 'MALE';
                    draft['student']['phoneNumber'] = undefined;
                    draft['student']['mobileNumber'] = undefined;
                    draft['student']['address'] = undefined;
                }
                draft['studentFile'] = [];
                draft['studentLifeFile'] = [];
                draft['careerDescFiles'] = [];
                draft['licensesFiles'] = [];
                draft['awardsFiles'] = [];
                draft['portfolioFiles'] = [];
                draft['psychometryFiles'] = [];

                draft['student'].updateFlag = undefined;
                draft['studentFile'].updateFlag = undefined;
                draft['studentLifeFile'].updateFlag = undefined;
                draft['careerDescFiles'].updateFlag = undefined;
                draft['licensesFiles'].updateFlag = undefined;
                draft['awardsFiles'].updateFlag = undefined;
                draft['portfolioFiles'].updateFlag = undefined;
                draft['psychometryFiles'].updateFlag = undefined;

                draft['student'].deleteFlag = undefined;
                draft['studentFile'].deleteFlag = undefined;
                draft['studentLifeFile'].deleteFlag = undefined;
                draft['careerDescFiles'].deleteFlag = undefined;
                draft['licensesFiles'].deleteFlag = undefined;
                draft['awardsFiles'].deleteFlag = undefined;
                draft['portfolioFiles'].deleteFlag = undefined;
                draft['psychometryFiles'].deleteFlag = undefined;


                if (data.files !== undefined) {
                    if (data.files.length > 0) {
                        data.files.forEach(file => {
                            if (file.type === 'STUDENT') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['studentFile'].push(file);
                            } else if (file.type === 'STUDENT_RECORD') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['studentLifeFile'].push(file);
                            } else if (file.type === 'CAREER_DESC') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['careerDescFiles'].push(file);
                            } else if (file.type === 'LICENSE') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['licensesFiles'].push(file);
                            } else if (file.type === 'AWARD') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['awardsFiles'].push(file);
                            } else if (file.type === 'PORTFOLIO') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['portfolioFiles'].push(file);
                            } else if (file.type === 'PSYCHOMETRY') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['psychometryFiles'].push(file);
                            }
                        });
                    }
                }


                draft['eduLevels'] = [];
                draft['licenses'] = [];
                draft['careers'] = [];
                draft['careerDescs'] = [];
                draft['activities'] = [];
                draft['awards'] = [];
                draft['coverLetters'] = [];
                draft['educations'] = [];
                draft['portfolios'] = [];
                draft['etcs'] = [];


                draft['eduLevels'].updateFlag = undefined;
                draft['licenses'].updateFlag = undefined;
                draft['careers'].updateFlag = undefined;
                draft['careerDescs'].updateFlag = undefined;
                draft['activities'].updateFlag = undefined;
                draft['awards'].updateFlag = undefined;
                draft['coverLetters'].updateFlag = undefined;
                draft['educations'].updateFlag = undefined;
                draft['portfolios'].updateFlag = undefined;
                draft['etcs'].updateFlag = undefined;

                draft['eduLevels'].deleteFlag = undefined;
                draft['licenses'].deleteFlag = undefined;
                draft['careers'].deleteFlag = undefined;
                draft['careerDescs'].deleteFlag = undefined;
                draft['activities'].deleteFlag = undefined;
                draft['awards'].deleteFlag = undefined;
                draft['coverLetters'].deleteFlag = undefined;
                draft['educations'].deleteFlag = undefined;
                draft['portfolios'].deleteFlag = undefined;
                draft['etcs'].deleteFlag = undefined;


                if (data.eduLevels !== undefined && data.eduLevels.length > 0) {
                    data.eduLevels.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['eduLevels'].push(element)
                    });

                }
                if (data.licenses !== undefined && data.licenses.length > 0) {
                    data.licenses.forEach((element, index) => {
                        element.key = getUUID();
                        // element.updateFlag = true;
                        element.seq = index + 1;
                        draft['licenses'].push(element)
                    });

                }
                if (data.careers !== undefined && data.careers.length > 0) {
                    data.careers.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['careers'].push(element)
                    });

                }
                if (data.careerDescs !== undefined && data.careerDescs.length > 0) {
                    data.careerDescs.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['careerDescs'].push(element)
                    });

                }
                if (data.activities !== undefined && data.activities.length > 0) {
                    data.activities.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['activities'].push(element)
                    });

                }
                if (data.awards !== undefined && data.awards.length > 0) {
                    data.awards.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['awards'].push(element)
                    });

                }
                if (data.coverLetters !== undefined && data.coverLetters.length > 0) {
                    data.coverLetters.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;

                        draft['coverLetters'].push(element)
                    });

                } else {
                    let element = new Object();
                    element.key = getUUID();
                    element.seq = 1;

                    draft['coverLetters'].push(element)
                }
                if (data.educations !== undefined && data.educations.length > 0) {
                    data.educations.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['educations'].push(element)
                    });

                }
                if (data.portfolios !== undefined && data.portfolios.length > 0) {
                    data.portfolios.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['portfolios'].push(element)
                    });

                }
                if (data.etcs !== undefined && data.etcs.length > 0) {
                    data.etcs.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['etcs'].push(element)
                    });

                }


                if (draft['eduLevels'].length > 0) {
                    draft['studyHistoryStatus']['edulevel'] = true;
                }
                if (draft['licenses'].length > 0) {
                    draft['studyHistoryStatus']['license'] = true;
                }
                if (draft['careers'].length > 0) {
                    draft['studyHistoryStatus']['career'] = true;
                }
                if (draft['careerDescs'].length > 0) {
                    draft['studyHistoryStatus']['careerdesc'] = true;
                }
                if (draft['activities'].length > 0) {
                    draft['studyHistoryStatus']['activity'] = true;
                }
                if (draft['awards'].length > 0) {
                    draft['studyHistoryStatus']['award'] = true;
                }
                if (draft['coverLetters'].length > 0) {
                    draft['studyHistoryStatus']['coverletter'] = true;
                }
                if (draft['educations'].length > 0) {
                    draft['studyHistoryStatus']['education'] = true;
                }
                if (draft['portfolios'].length > 0 || draft['portfolioFiles'].length > 0) {
                    draft['studyHistoryStatus']['portfolio'] = true;
                }
                if (draft['etcs'].length > 0) {
                    draft['studyHistoryStatus']['etc'] = true;
                }

                if (draft['psychometryFiles'].length > 0) {
                    draft['studyHistoryStatus']['psychometry'] = true;
                }
                if (draft['studentLifeFile'].length > 0) {
                    draft['studyHistoryStatus']['studentlifedesc'] = true;
                }

                draft['display']['refresh'] = true;

            }),
        [SEARCH_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft['user'] = null;
                draft['search']['returnValue'] = null;
                draft['search']['error'] = true;
            }),
        [LOGINSEARCH_SUCCESS]: (state, {payload: data}) =>
            produce(state, draft => {
                draft['user'] = data;
                draft['loginSearch']['error'] = null;
                draft['loginSearch']['returnValue'] = data;

                draft['member']['id'] = data.id;
                draft['member']['type'] = data.type;
                draft['member']['name'] = data.name;
                draft['member']['email'] = data.email;
                draft['member']['expirationDate'] = data.expirationDate;
                if (data.student !== undefined) {
                    draft['student']['id'] = data.student.id;
                    draft['student']['seq'] = data.student.seq;
                    draft['student']['fieldId'] = data.student.id;
                    draft['student']['fileId'] = data.student.fileId;
                    draft['student']['descp'] = data.student.descp;
                    draft['student']['birthday'] = data.student.birthday;
                    draft['student']['sex'] = data.student.sex;
                    draft['student']['phoneNumber'] = data.student.phoneNumber;
                    draft['student']['mobileNumber'] = data.student.mobileNumber;
                    draft['student']['address'] = data.student.address;
                } else {
                    draft['student']['seq'] = undefined;
                    draft['student']['fieldId'] = undefined;
                    draft['student']['fileId'] = undefined;
                    draft['student']['descp'] = undefined;
                    draft['student']['birthday'] = undefined;
                    draft['student']['sex'] = 'MALE';
                    draft['student']['phoneNumber'] = undefined;
                    draft['student']['mobileNumber'] = undefined;
                    draft['student']['address'] = undefined;
                }
                draft['studentFile'] = [];
                draft['studentLifeFile'] = [];
                draft['careerDescFiles'] = [];
                draft['licensesFiles'] = [];
                draft['awardsFiles'] = [];
                draft['portfolioFiles'] = [];
                draft['psychometryFiles'] = [];

                draft['student'].updateFlag = undefined;
                draft['studentFile'].updateFlag = undefined;
                draft['studentLifeFile'].updateFlag = undefined;
                draft['careerDescFiles'].updateFlag = undefined;
                draft['licensesFiles'].updateFlag = undefined;
                draft['awardsFiles'].updateFlag = undefined;
                draft['portfolioFiles'].updateFlag = undefined;
                draft['psychometryFiles'].updateFlag = undefined;

                draft['student'].deleteFlag = undefined;
                draft['studentFile'].deleteFlag = undefined;
                draft['studentLifeFile'].deleteFlag = undefined;
                draft['careerDescFiles'].deleteFlag = undefined;
                draft['licensesFiles'].deleteFlag = undefined;
                draft['awardsFiles'].deleteFlag = undefined;
                draft['portfolioFiles'].deleteFlag = undefined;
                draft['psychometryFiles'].deleteFlag = undefined;


                if (data.files !== undefined) {
                    if (data.files.length > 0) {
                        data.files.forEach(file => {
                            if (file.type === 'STUDENT') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['studentFile'].push(file);
                            } else if (file.type === 'STUDENT_RECORD') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['studentLifeFile'].push(file);
                            } else if (file.type === 'CAREER_DESC') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['careerDescFiles'].push(file);
                            } else if (file.type === 'LICENSE') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['licensesFiles'].push(file);
                            } else if (file.type === 'AWARD') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['awardsFiles'].push(file);
                            } else if (file.type === 'PORTFOLIO') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['portfolioFiles'].push(file);
                            } else if (file.type === 'PSYCHOMETRY') {
                                file.key = getUUID();
                                file.checkDelete = false;
                                draft['psychometryFiles'].push(file);
                            }
                        });
                    }
                }


                draft['eduLevels'] = [];
                draft['licenses'] = [];
                draft['careers'] = [];
                draft['careerDescs'] = [];
                draft['activities'] = [];
                draft['awards'] = [];
                draft['coverLetters'] = [];
                draft['educations'] = [];
                draft['portfolios'] = [];
                draft['etcs'] = [];


                draft['eduLevels'].updateFlag = undefined;
                draft['licenses'].updateFlag = undefined;
                draft['careers'].updateFlag = undefined;
                draft['careerDescs'].updateFlag = undefined;
                draft['activities'].updateFlag = undefined;
                draft['awards'].updateFlag = undefined;
                draft['coverLetters'].updateFlag = undefined;
                draft['educations'].updateFlag = undefined;
                draft['portfolios'].updateFlag = undefined;
                draft['etcs'].updateFlag = undefined;

                draft['eduLevels'].deleteFlag = undefined;
                draft['licenses'].deleteFlag = undefined;
                draft['careers'].deleteFlag = undefined;
                draft['careerDescs'].deleteFlag = undefined;
                draft['activities'].deleteFlag = undefined;
                draft['awards'].deleteFlag = undefined;
                draft['coverLetters'].deleteFlag = undefined;
                draft['educations'].deleteFlag = undefined;
                draft['portfolios'].deleteFlag = undefined;
                draft['etcs'].deleteFlag = undefined;


                if (data.eduLevels !== undefined && data.eduLevels.length > 0) {
                    data.eduLevels.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['eduLevels'].push(element)
                    });

                }
                if (data.licenses !== undefined && data.licenses.length > 0) {
                    data.licenses.forEach((element, index) => {
                        element.key = getUUID();
                        // element.updateFlag = true;
                        element.seq = index + 1;
                        draft['licenses'].push(element)
                    });

                }
                if (data.careers !== undefined && data.careers.length > 0) {
                    data.careers.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['careers'].push(element)
                    });

                }
                if (data.careerDescs !== undefined && data.careerDescs.length > 0) {
                    data.careerDescs.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['careerDescs'].push(element)
                    });

                }
                if (data.activities !== undefined && data.activities.length > 0) {
                    data.activities.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['activities'].push(element)
                    });

                }
                if (data.awards !== undefined && data.awards.length > 0) {
                    data.awards.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['awards'].push(element)
                    });

                }
                if (data.coverLetters !== undefined && data.coverLetters.length > 0) {
                    data.coverLetters.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;

                        draft['coverLetters'].push(element)
                    });

                } else {
                    let element = new Object();
                    element.key = getUUID();
                    element.seq = 1;

                    draft['coverLetters'].push(element)
                }
                if (data.educations !== undefined && data.educations.length > 0) {
                    data.educations.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['educations'].push(element)
                    });

                }
                if (data.portfolios !== undefined && data.portfolios.length > 0) {
                    data.portfolios.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['portfolios'].push(element)
                    });

                }
                if (data.etcs !== undefined && data.etcs.length > 0) {
                    data.etcs.forEach((element, index) => {
                        element.key = getUUID();
                        element.seq = index + 1;
                        draft['etcs'].push(element)
                    });

                }


                if (draft['eduLevels'].length > 0) {
                    draft['studyHistoryStatus']['edulevel'] = true;
                }
                if (draft['licenses'].length > 0) {
                    draft['studyHistoryStatus']['license'] = true;
                }
                if (draft['careers'].length > 0) {
                    draft['studyHistoryStatus']['career'] = true;
                }
                if (draft['careerDescs'].length > 0) {
                    draft['studyHistoryStatus']['careerdesc'] = true;
                }
                if (draft['activities'].length > 0) {
                    draft['studyHistoryStatus']['activity'] = true;
                }
                if (draft['awards'].length > 0) {
                    draft['studyHistoryStatus']['award'] = true;
                }
                if (draft['coverLetters'].length > 0) {
                    draft['studyHistoryStatus']['coverletter'] = true;
                }
                if (draft['educations'].length > 0) {
                    draft['studyHistoryStatus']['education'] = true;
                }
                if (draft['portfolios'].length > 0 || draft['portfolioFiles'].length > 0) {
                    draft['studyHistoryStatus']['portfolio'] = true;
                }
                if (draft['etcs'].length > 0) {
                    draft['studyHistoryStatus']['etc'] = true;
                }

                if (draft['psychometryFiles'].length > 0) {
                    draft['studyHistoryStatus']['psychometry'] = true;
                }
                if (draft['studentLifeFile'].length > 0) {
                    draft['studyHistoryStatus']['studentlifedesc'] = true;
                }

                draft['display']['refresh'] = true;

            }),
        [LOGINSEARCH_FAILURE]: (state, {payload: error}) =>
            produce(state, draft => {
                draft['user'] = null;
                draft['loginSearch']['returnValue'] = null;
                draft['loginSearch']['error'] = true;
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

        [FINDID_SUCCESS]: (state, {payload: dataArray}) =>
            produce(state, draft => {

                var name = '';
                if (dataArray.length > 0) {
                    dataArray.forEach(element => {
                        name += element.id + ' ';
                    });
                    draft['findId']['returnValue'] = name;
                    draft['findId']['error'] = null;
                } else {
                    draft['findId']['returnValue'] = null;
                    draft['findId']['error'] = "발견할 수 없습니다.";

                }

            }),
        [FINDID_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['findId']['returnValue'] = null;
            draft['findId']['error'] = error;
        }),
        [FINDPWD_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['findPassword']['returnValue'] = result;
            draft['findPassword']['error'] = null;
        }),
        [FINDPWD_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['findPassword']['returnValue'] = null;
            draft['findPassword']['error'] = error;
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

        [UPDATEUSER_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['updateUser']['returnValue'] = 'success';
            draft['updateUser']['error'] = null;
        }),
        [UPDATEUSER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['updateUser']['returnValue'] = null;
            draft['updateUser']['error'] = error;
        }),

        [RETIREMEMBER_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['retireMember']['returnValue'] = 'success';
            draft['retireMember']['error'] = null;
        }),
        [RETIREMEMBER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['retireMember']['returnValue'] = null;
            draft['retireMember']['error'] = error;
        }),
        [EXISTMEMBER_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['existMember']['returnValue'] = 'success';
            draft['existMember']['error'] = null;
        }),
        [EXISTMEMBER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['existMember']['returnValue'] = null;
            draft['existMember']['error'] = error;
        }),
        [SEARCH_MEMBER_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            if (result !== 'Success') {
                draft['member_list'] = result;
                draft['search_member']['returnValue'] = 'success';
                draft['search_member']['error'] = null;
            }
        }),
        [SEARCH_MEMBER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['search_member']['returnValue'] = null;
            draft['search_member']['error'] = error;
            draft['member_list'] = null;

        }),
        [DELETE_MEMBER_SUCCESS]: (state, {payload: result}) => produce(state, draft => {
            draft['deleteMember']['returnValue'] = 'success';
            draft['deleteMember']['error'] = null;
        }),
        [DELETE_MEMBER_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['deleteMember']['error'] = error;
            draft['deleteMember'] = null;

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

export default auth;


///*
//		// 400
//		EMPTY_INPUT_DATA("데이타가 비어 있습니다."),
//		INVALID_ARGUMENT("요청 값이 잘못 되었습니다."),
//		ALREADY_EXISTS("이미 해당 값이 존재합니다."),
//
//		// 401
//		UNAUTHORIZED("인증되지 않았습니다."),
//		NO_VALID_TOKEN("유효한 토큰이 없습니다."),
//		FAILED_CREDENTIALS("아이디 또는 비밀번호가 틀립니다."),
//		INVALID_SIGNATURE("잘못된 서명입니다."),
//		EXPIRED_TOKEN("만료된 토큰입니다."),
//		NOT_SUPPORTED_TOKEN("지원되지 않는 토큰입니다."),
//		INVALID_TOKEN("토큰이 잘못되었습니다."),
//
//		// 40X
//		FORBIDDEN("접근 권한이 없습니다."), // 403
//		NOT_FOUND("해당 값을 찾을수 없습니다."), // 404
//
//		// 500
//		ID_IS_NULL("아이디가 비어 있습니다."),
//		NO_ID_FIELD("아이디 필드가 없습니다."),
//		NOT_LOGGED_IN("로그인하지 않았습니다."),
//		NOT_SUPPORTED("아직 지원하지 않습니다."),
//		NOT_ACTIVATED("사용중이지 않습니다.."),
//
//		INVALID_PASSWORD("아이디 또는 비밀번호가 일치하지 않습니다."),
//		INVALID_NEW_PASSWORD("새 비밀번호와 확인 비밀번호가 일치하지 않습니다."),
//		EXCEED_LOGIN_FAIL_COUNT("로그인 실패 횟수를 초과했습니다."),
//
//		DB_ERROR("DB 사용중 에러가 발생했습니다."),
//		IMAGING_ERROR("이미지 처리중 에러가 발생했습니다."),
//		FILES_ERROR("파일 처리중 에러가 발생했습니다."),
//		ENCRYPTION_ERROR("암/복호화중 에러가 발생했습니다."),
//		EMAIL_ERROR("이메일 발송중 에러가 발생했습니다."),
//		HTTP_CLIENT_ERROR("레거시 요청중 에러가 발생했습니다.");
//*/

