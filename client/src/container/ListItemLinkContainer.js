import React, { PureComponent, useEffect, useState } from "react";
import ListItemLink from "../component/ListItemLink";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import { useStyles } from "../static/MiniDrawerStyles";
import ListSubItemLink from "../component/ListSubItemLink";
import { changeField, changeMainMenu } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const ListItemLinkContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { menuStatus } = useSelector(({ auth }) => ({
    menuStatus: auth.initializeMenuStatus.status,
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
            <React.Fragment key={index}>
              <ListSubItemLink
                main={menuObj.mainStatus}
                sub={sub.path}
                menuText={sub.menuName}
                icon={sub.icon}
                className={classes.nested}
                toggleSideBar={toggleSideBar}
              />
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default ListItemLinkContainer;
