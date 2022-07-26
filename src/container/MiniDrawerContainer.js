import React from "react";
import MiniDrawer from "../component/MiniDrawer";

const MiniDrawerContainer = (props) => {
  const { openSideBarStatus, toggleSideBar } = props;
  return (
    <MiniDrawer
      openSideBarStatus={openSideBarStatus}
      toggleSideBar={toggleSideBar}
    />
  );
};

export default MiniDrawerContainer;
