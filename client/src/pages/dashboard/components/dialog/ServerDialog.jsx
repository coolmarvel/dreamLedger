import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Chip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';

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

function CustomizedDialogs() {
    // 모달
    const [open, setOpen] = useState(false);

    // 페이징
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const statusObj = {
        안전: { color: 'success' },
        위험: { color: 'error' }
    }

    const [rows, setRows] = useState([
        {
            status: '안전',
            serverName: 'Admin'
        },
        {
            status: '안전',
            serverName: 'Node 1'
        },
        {
            status: '위험',
            serverName: 'Node 2'
        },
        {
            status: '위험',
            serverName: 'Node 3'
        },
        {
            status: '안전',
            serverName: 'Node 4'
        },
        {
            status: '위험',
            serverName: 'Node 5'
        },
        {
            status: '안전',
            serverName: 'Node 6'
        },
        {
            status: '안전',
            serverName: 'Node 7'
        },
        {
            status: '위험',
            serverName: 'Node 8'
        },
        {
            status: '안전',
            serverName: 'Node 9'
        },
        {
            status: '안전',
            serverName: 'Node 10'
        },
        {
            status: '안전',
            serverName: 'Node 11'
        },
        {
            status: '위험',
            serverName: 'Node 12'
        },
    ])

    // 모달 열고 닫기 function
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // 페이징 관련 function
    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
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
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
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
                <TablePagination
                    sx={{ px: 2 }}
                    page={page}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    count={rows.length}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    nextIconButtonProps={{ "aria-label": "Next Page" }}
                    backIconButtonProps={{ "aria-label": "Previous Page" }}
                />
            </BootstrapDialog>
        </div>
    );
}

export default React.memo(CustomizedDialogs)