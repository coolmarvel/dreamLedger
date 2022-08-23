import React from 'react'

// ** MUI Imports
import Paper from "@material-ui/core/Paper";
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

import { withStyles, makeStyles } from "@material-ui/core/styles";

const rows = [
  {
    status: '안전',
    name: 'Servers',
    designation: 'Human Resources Assistant'
  },
  {
    status: '안전',
    name: 'Orgs',
    designation: 'Nuclear Power Engineer'
  },
  {
    status: '위험',
    name: 'Orderers',
    designation: 'Environmental Specialist'
  },
  {
    status: '주의',
    name: 'Peers',
    designation: 'Sales Representative'
  },
  {
    status: '안전',
    name: 'CA Servers',
    designation: 'Environmental Specialist'
  },
  {
    status: '주의',
    name: 'Channels',
    designation: 'Operator',
  },
]

const statusObj = {
  위험: { color: 'error' },
  주의: { color: 'warning' },
  안전: { color: 'success' }
}

const useStyles = makeStyles({
  table: {
    minWidth: 100
  },
  tableRow: {
    height: 30
  },
  tableCell: {
    padding: "0px 16px"
  }
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 30
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "0px 16px"
  }
}))(TableCell);

const DashboardTable = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
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
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name} hover>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.5rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 250 }
                    }}
                  /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>

  )
}

export default DashboardTable
