import React, { PureComponent, useEffect, useState } from "react";
import ListItemLink from "./ListItemLink";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import { useStyles } from "./MiniDrawerStyles";
import ListSubItemLink from "./ListSubItemLink";
import { changeField, changeMainMenu } from "../redux/MainReducer.js";
import { useDispatch, useSelector } from "react-redux";

const ListItemLinkContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { menuStatus } = useSelector(({ main }) => ({
    menuStatus: main.initializeMenuStatus.status,
  }));
  const classes = useStyles;
  const handleClick = (e) => {
    setIsOpen(!isOpen);
    dispatch(
      changeMainMenu({
        form: "currentMainMenu",
        value: menuObj.id,
      })
    );
  };
  const { menuObj, toggleSideBar, mainMenu } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuStatus) {
      setIsOpen(false);
      dispatch(
        changeField({
          form: "initializeMenuStatus",
          key: "status",
          value: false,
        })
      );
    }
  }, [menuStatus]);

  useEffect(() => {
    if (mainMenu !== menuObj.id) {
      setIsOpen(false);
    }
  }, [mainMenu]);
  return (
    <div className={classes.root}>
      {menuObj.submenu.length > 0 ? (
        <ListItemLink
          key={menuObj.id}
          to={menuObj.path}
          menuText={menuObj.menuName}
          icon={menuObj.icon}
          open={mainMenu === menuObj.id && isOpen}
          onClick={handleClick}
        />
      ) : (
        <ListItemLink
          key={menuObj.id}
          to={menuObj.path}
          menuText={menuObj.menuName}
          icon={menuObj.icon}
          // toggleSideBar = {toggleSideBar}
          open={null}
          onClick={handleClick}
        />
      )}

      <Collapse
        component="li"
        in={mainMenu === menuObj.id && isOpen}
        timeout="auto"
        unmountOnExit
      >
        <List disablePadding>
          {menuObj.submenu.map((sub, index) => (
            <ListSubItemLink
              key={index}
              main={menuObj.mainStatus}
              sub={sub.path}
              menuText={sub.menuName}
              icon={sub.icon}
              className={classes.nested}
              toggleSideBar={toggleSideBar}
            />
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default ListItemLinkContainer;
