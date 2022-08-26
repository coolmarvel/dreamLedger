import React, { useState } from "react";

// MUI DIALOG
import { DialogContent, Typography } from "@mui/material";

// MUI TABLE
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

import OrdererTableRow from "./OrdererTableRow";
import { BootstrapDialog, BootstrapDialogTitle } from "./util/BootstrapDialog";

function CustomizedDialogs({ setLoading }) {
  // 모달
  const [open, setOpen] = useState(false);

  // 페이징
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // 테이블 데이터
  const [rows, setRows] = useState([
    { domain: "Orderer0.dreamsecurity.com" },
    { domain: "Orderer1.dreamsecurity.com" },
    { domain: "Orderer2.dreamsecurity.com" },
  ]);

  // modal function
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // pagination function
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Typography onClick={handleClickOpen}>Orderers</Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          align="left"
        >
          Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 500 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Domain</TableCell>
                  <TableCell align="center">On/Off</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <OrdererTableRow key={row.domain} row={row} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

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

export default React.memo(CustomizedDialogs);
