import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { PropTypes } from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { useStyles, isMobile } from "../static/MiniDrawerStyles";
import clsx from "clsx";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../modules/auth";
const ListSubItemLink = (props) => {
  const { main, sub, menu, menuText, icon, toggleSideBar, ...other } = props;
  const { auth } = useSelector(({ auth }) => ({
    auth: auth,
  }));
  const dispatch = useDispatch();
  const handleClick = () => {
    //  setOpen(!open);
  };
  const onClick = () => {
    dispatch(
      changeField({
        form: main,
        key: sub,
        value: !auth[main][sub],
      })
    );
    if (isMobile()) {
      toggleSideBar();
    }
  };

  if (main === "changeInfoStatus") {
    return (
      <ListItem button component={RouterLink} to={sub} {...other}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={menuText} />
      </ListItem>
    );
  } else if (main === "manageInfoStatus") {
    return (
      <ListItem button component={RouterLink} to={sub} {...other}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={menuText} />
      </ListItem>
    );
  } else {
    return (
      <ListItem button onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={menuText} />
        <IconButton onClick={handleClick}>
          {auth[main][sub] != null ? (
            !auth[main][sub] ? (
              <Add />
            ) : (
              <Remove />
            )
          ) : null}
        </IconButton>
      </ListItem>
    );
  }
};

ListSubItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string,
  key: PropTypes.number,
  // to: PropTypes.string.isRequired,
  // key: PropTypes.number.isRequired,
};

export default ListSubItemLink;
