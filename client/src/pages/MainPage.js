import React from 'react';
import MiniDrawerContainer from '../main/MiniDrawerContainer';

import { useStyles } from '../main/MiniDrawerStyles';
import {Routing} from "../main/Routing";

function MainPage(props) {
    const classes = useStyles();
    const { openSideBarStatus, toggleSideBar } = props;
    return (
        <div className={classes.root}>

            <MiniDrawerContainer openSideBarStatus={openSideBarStatus} toggleSideBar={toggleSideBar}/>
            <Routing openSideBarStatus={openSideBarStatus} toggleSideBar={toggleSideBar} />
        </div>
    );
}

export default MainPage;
