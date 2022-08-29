import React, { useState, useEffect } from "react";

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

import OrdererTableRow from "./tableRow/OrdererTableRow";
import { BootstrapDialog, BootstrapDialogTitle } from "./util/BootstrapDialog";
import { getOrderer } from "../../../../../api/dashboardAPI";

function CustomizedDialogs({ setLoading }) {
  // 모달
  const [open, setOpen] = useState(false);

  // 페이징
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // 테이블 데이터
  const [rows, setRows] = useState([]);

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

  const getOrdererList = async () => {
    try {
      await getOrderer()
        .then((res) => {
          const result = res.map((v) => v.domain);
          setRows(result);
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setLoading(true);
    getOrdererList();
    setLoading(false);
  }, []);

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
                  .map((row, index) => (
                    <OrdererTableRow key={index} row={row} />
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
