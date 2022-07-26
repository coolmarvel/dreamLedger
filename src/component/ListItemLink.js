import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from "clsx";
function ListItemLink(props) {
    const { to, open, menu, menuText,icon,...other } = props;
    const classes = useStyles();
    if(to === undefined) {
        return (
        <ListItem className={clsx(classes.listPadding)} button  {...other}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={menuText} />
            {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
        );
    }
    else {
        return (

            <ListItem className={clsx(classes.listPadding)} button component={RouterLink} to={to} {...other}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={menuText} />
                {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>


        );
    }

}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default ListItemLink;

