import React, {PureComponent, useState} from 'react';
import MainPage from '../component/MainPage';
import {useDispatch, useSelector} from "react-redux";
import {changeField, removeSubField} from "../modules/auth";

const MainPageContainer = (props)  => {

    const { status} = useSelector(({ auth}) => ({
        status: auth.openSideBar.status,
    }));
    const dispatch = useDispatch();

    const toggleSideBar = (e) => {
        dispatch(
            changeField({
                form: 'openSideBar',
                key: 'status',
                value:!status
            }),
        );
    }


        return (
            <MainPage
                openSideBarStatus={status}
                toggleSideBar={toggleSideBar}
            />
        );

}

export default MainPageContainer;
