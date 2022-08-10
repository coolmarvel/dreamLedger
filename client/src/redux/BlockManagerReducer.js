import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from './createRequestSaga';
import * as authAPI from '../api/BlockManagerApi';

import client from "../api/client";

const INITIALIZE_FORM = 'blockManagerReducer/INITIALIZE_FORM';
const INITIALIZE_FORM2 = 'blockManagerReducer/INITIALIZE_FORM2';

const [BLOCK_MANAGER_SERVERS, BLOCK_MANAGER_SERVERS_SUCCESS, BLOCK_MANAGER_SERVERS_FAILURE] = createRequestActionTypes(
  'blockManagerReducer/BLOCK_MANAGER_SERVERS'
);


export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const initializeForm2 = createAction(INITIALIZE_FORM2, ({form,sub}) => ({form,sub})); // register / login
export const blockManagerServers = createAction(BLOCK_MANAGER_SERVERS);



// saga 생성
const blockManagerServersSaga = createRequestSaga(BLOCK_MANAGER_SERVERS, authAPI.block_manager_servers);




export function* blockManagerSaga() {
    yield takeLatest(BLOCK_MANAGER_SERVERS, blockManagerServersSaga);
}


const initialState = {

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

    baseUrl:  client.defaults.baseURL,//'http://10.10.40.150:8090',

};

const initReducerDatabase = (draft) =>{


};

const blockManager = handleActions(
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

        [BLOCK_MANAGER_SERVERS_FAILURE]: (state, {payload: error}) => produce(state, draft => {
            draft['blockManager']['servers'].error = error; // 예: state.register.username을 바꾼다
            draft['blockManager']['servers'].returnValue = true;

        }),


    },
        initialState

);

export default blockManager;

