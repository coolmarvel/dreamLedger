import { makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 240;
export const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 480px)").matches
export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap:'wrap',


    },
    appBar: {
        zIndex: theme.zIndex.drawer - 1,
        backgroundColor: '#f1f1f1',
        color:'#000000',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 2,
        padding:1,
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,

        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width:0
        // width: theme.spacing(7) + 1,
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9) + 1,
        // },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 0px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        paddingTop:theme.spacing(10),
        // display: 'block',
    },
    contentShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    lists: {
        // backgroundColor: '#2196F3',
        color: "rgba(255,255,255,1)",
        background: "rgba(30, 139, 195, 0.8)",


        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    breadCrumbBar: {
        display: 'flex',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    breadCrumbBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
        padding: theme.spacing(1, 2),
    },
    listPadding:{
        drawerWidth: theme.spacing(1),
        background: "rgba(30, 139, 195, 0.8)",

    },
    listScrollPadding:{
        drawerWidth: theme.spacing(0),

    },

}));
