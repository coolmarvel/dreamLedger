import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { staticMenu } from '../static/Menus';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, IconButton, Typography, Grid, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, withRouter} from 'react-router-dom';
import ListItemLinkContainer from '../container/ListItemLinkContainer';
import { useStyles ,isMobile} from '../static/MiniDrawerStyles';
import {useSelector} from "react-redux";
import {HeaderPage} from "../pages/HeaderPage";


const  MiniDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const { openSideBarStatus, toggleSideBar } = props;
    const { m_currentMainMenu} = useSelector(({ auth}) => ({
        m_currentMainMenu:auth.currentMainMenu,
    }));
    theme.direction = 'ltl';
    const handleLogoClick = () => {

    };

    const handleLoginClick = () => {
        if(auth){
            props.history.push('/logout');
        }
        else {
            props.history.push('/login');

        }
    };
    function getLabel(auth){
        if(auth){
            setLabel(label => '로그아웃');
        }
        else {
            setLabel(label => '로그인');
        }
    }
    const {auth} = useSelector(({ auth }) => ({
        auth: auth.auth,
    }));

    const [label,setLabel] = useState('로그인');
    useMemo(() => getLabel(auth), [auth]);


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openSideBarStatus,
                })}>

                <Toolbar className={clsx(classes.toobar, {
                    [classes.hide]: (openSideBarStatus  && isMobile()),
                })}>
                    <Grid container justify={'flex-start'}>

                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={toggleSideBar}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: openSideBarStatus,
                            })}
                        >
                            <MenuIcon className={classes.menuButton} />

                        </IconButton>
                        <Button><img src="/images/ft_logo_wh.png"   width={120} height={32} alt=''  onClick={handleLogoClick} /></Button>
                    </Grid>
                    <Grid container justify={'flex-center'} >
                        <Typography  >
                            블록체인
                        </Typography>
                    </Grid>


                    <Grid container justify={'flex-end'}>
                        <Button  onClick={handleLoginClick}>{label}</Button>
                    </Grid>


                </Toolbar>

            </AppBar>


            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openSideBarStatus,
                    [classes.drawerClose]: !openSideBarStatus,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openSideBarStatus,
                        [classes.drawerClose]: !openSideBarStatus,
                    }),
                }}
                open={openSideBarStatus}

            >
                <div className={classes.toolbar} >
                    <IconButton onClick={toggleSideBar}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>

                <Divider />
                <nav className={classes.lists}>
                    <List >
                        {staticMenu.map((menu, index) => (
                            <React.Fragment key={index}>
                                <ListItemLinkContainer menuObj={menu}
                                                       mainMenu = {m_currentMainMenu}
                                                       toggleSideBar = {toggleSideBar}/>
                            </React.Fragment>
                        ))}
                    </List>
                </nav>
                <Divider />
            </Drawer>
        </React.Fragment >
    );
}


export default withRouter(MiniDrawer);
