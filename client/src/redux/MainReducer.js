import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INITIALIZE_FORM = 'mainRedcer/INITIALIZE_FORM';
const INITIALIZE_FORM2 = 'mainRedcer/INITIALIZE_FORM2';
const CHANGE_MAIN_MENU = 'mainRedcer/CHANGE_MAIN_MENU';
const CHANGE_FIELD = 'blockManagerReducer/CHANGE_FIELD';

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const initializeForm2 = createAction(INITIALIZE_FORM2, ({form,sub}) => ({form,sub})); // register / login



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
const initialState = {

    openSideBar:{
        status:false
    },
    initializeMenuStatus:{
        status:false,
    },
    currentMainMenu:0,

};

const initReducerDatabase = (draft) => {

    draft['openSideBar']['status'] = false;
    draft['initializeMenuStatus']['status'] = true;
}


const main = handleActions(
    {

        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        [INITIALIZE_FORM2]: (state, {payload: {form, sub}}) =>
            produce(state, draft => {
                draft[form][sub] = initialState[form][sub]; // 예: state.register.username을 바꾼다
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

   },
        initialState

);

export default main;

