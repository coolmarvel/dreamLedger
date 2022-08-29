import React, { useState } from "react";

// ** MUI Imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

import Servers from "./dialog/ServersDialog";
import Orderers from "./dialog/OrdererDialog";
import Orgs from "./dialog/OrgsDialog";
import Peers from "./dialog/PeersDialog";
import CAServers from "./dialog/CAServersDialog";
import Channels from "./dialog/ChannelsDialog";

import { withStyles, makeStyles } from "@material-ui/core/styles";

const statusColor = {
  위험: { color: "error" },
  주의: { color: "warning" },
  안전: { color: "success" },
};

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  tableRow: {
    height: 30,
  },
  tableCell: {
    padding: "0px 16px",
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 30,
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "0px 16px",
  },
}))(TableCell);

const DashboardTable = ({ setLoading }) => {
  const [value, setValue] = useState(true);
  const rows = [
    {
      name: <Servers setLoading={setLoading} />,
    },
    {
      name: <Orgs setLoading={setLoading} />,
    },
    {
      name: <Orderers setLoading={setLoading} />,
    },
    {
      name: <Peers setLoading={setLoading} />,
    },
    {
      name: <CAServers setLoading={setLoading} />,
    },
    {
      name: <Channels setLoading={setLoading} />,
    },
  ];

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          {/* 상단 정보 */}
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} align="center">
                BlockChain Info
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          {/* 모달로 관리 */}
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index} hover>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Chip
                    // label={row.status}
                    color={value ? "success" : "error"}
                    sx={{
                      height: 24,
                      fontSize: "0.5rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 250 },
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default React.memo(DashboardTable);
