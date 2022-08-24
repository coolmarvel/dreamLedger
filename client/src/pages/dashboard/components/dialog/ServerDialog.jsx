import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Chip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

function createData(status, serverName) {
    return { status, serverName };
}

const statusObj = {
    안전: { color: 'success' },
    위험: { color: 'error' }
}

const rows = [
    createData('안전', 'Admin'),
    createData('안전', 'Node 1'),
    createData('위험', 'Node 2'),
];

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
                Servers
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
                                    <TableCell align="center">ServerName</TableCell>
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
                                                color={statusObj[row.status].color}
                                                sx={{
                                                    height: 24,
                                                    fontSize: '0.1rem',
                                                    textTransform: 'capitalize',
                                                    '& .MuiChip-label': { fontWeight: 0 }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{row.serverName}</TableCell>
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