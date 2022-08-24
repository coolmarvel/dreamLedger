import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

// MUI DIALOG
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Chip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

// MUI TABLE
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// MUI SWITCH
import { FormControlLabel, Switch } from '@mui/material'

///////////////////////////////////////////////////Dialog (모달관련)///////////////////////////////////////////////////

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

///////////////////////////////////////////////////모달 내부 테이블///////////////////////////////////////////////////

function createData(status, domain) {
    return { status, domain };
}

const status = {
    safe: { color: 'success' },
    danger: { color: 'error' }
}

const rows = [
    createData('safe', 'Orderer0.dreamsecurity.com'),
    createData('safe', 'Orderer1.dreamsecurity.com'),
    createData('danger', 'Orderer2.dreamsecurity.com'),
];

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

function CustomizedDialogs() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography onClick={handleClickOpen}>
                Orderers
            </Typography>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align="left">
                    Details
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Domain</TableCell>
                                    <TableCell align="center">On/Off</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            <Chip
                                                color={status[row.status].color}
                                                sx={{
                                                    height: 24,
                                                    fontSize: '0.1rem',
                                                    textTransform: 'capitalize',
                                                    '& .MuiChip-label': { fontWeight: 0 }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{row.domain}</TableCell>
                                        <TableCell align="right">
                                            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </div>
    );
}

export default React.memo(CustomizedDialogs)