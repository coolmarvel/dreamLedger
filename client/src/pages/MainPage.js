import React from "react";
import MiniDrawerContainer from "../container/MiniDrawerContainer";

import { useStyles } from "../static/MiniDrawerStyles";
import { Routing } from "../component/Routing";
import { Popup1 } from "./Popup1";
import { Popup2 } from "./Popup2";
import { Popup3 } from "./Popup3";
import { Popup4 } from "./Popup4";
import { Toast1 } from "./Toast1";
import { Toast2 } from "./Toast2";

function MainPage(props) {
  const classes = useStyles();
  const { openSideBarStatus, toggleSideBar } = props;
  return (
    <div className={classes.root}>
      <MiniDrawerContainer
        openSideBarStatus={openSideBarStatus}
        toggleSideBar={toggleSideBar}
      />
      <Routing
        openSideBarStatus={openSideBarStatus}
        toggleSideBar={toggleSideBar}
      />

      <Popup1></Popup1>
      <Popup2></Popup2>
      <Popup3></Popup3>
      <Popup4></Popup4>
      <Toast1></Toast1>
      <Toast2></Toast2>
    </div>
  );
}

export default MainPage;
