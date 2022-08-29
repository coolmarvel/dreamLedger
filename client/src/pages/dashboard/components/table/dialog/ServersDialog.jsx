import React, { useState, useEffect } from "react";

import { DialogContent, Typography } from "@mui/material";

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

import { getNetworkServer } from "../../../../../api/dashboardAPI";
import { BootstrapDialog, BootstrapDialogTitle } from "./util/BootstrapDialog";
import ServersTableRow from "./tableRow/ServersTableRow";

///////////////////////////////////////////////////모달 내부 테이블///////////////////////////////////////////////////

function ServerDialog({ setLoading }) {
  // 모달
  const [open, setOpen] = useState(false);

  // 페이징
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // status & serverName
  const [value, setValue] = useState(true);
  const [rows, setRows] = useState([]);

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

  const getServerList = async () => {
    try {
      await getNetworkServer()
        .then((res) => {
          const result = res.map((v) => v.name);
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
    getServerList();
    setLoading(false);
  }, []);

  return (
    <div>
      <Typography onClick={handleClickOpen}>Servers</Typography>
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
                  <TableCell align="center">ServerName</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <ServersTableRow
                      key={index}
                      setLoading={setLoading}
                      row={row}
                    />
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

export default React.memo(ServerDialog);
