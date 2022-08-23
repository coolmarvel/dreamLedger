// ** MUI Imports
import Box from '@mui/material/Box'
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
    server: 'Servers',
    name: '* ',
    designation: 'Human Resources Assistant'
  },
  {
    status: '안전',
    server: 'Orgs',
    name: ' *',
    designation: 'Nuclear Power Engineer'
  },
  {
    status: '위험',
    server: 'Orderers',
    name: ' * ',
    designation: 'Environmental Specialist'
  },
  {
    status: '주의',
    server: 'Peers',
    name: '  *  ',
    designation: 'Sales Representative'
  },
  {
    status: '주의',
    server: 'Channels',
    name: ' *  ',
    designation: 'Operator',
  }
]

const statusObj = {
  applied: { color: 'info' },
  위험: { color: 'error' },
  current: { color: 'primary' },
  주의: { color: 'warning' },
  안전: { color: 'success' }
}


const DashboardTable = () => {

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

  const classes = useStyles();

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

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 20 }} className={classes.table} aria-label='table in dashboard'>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>BlockChain Info</TableCell>
              <TableCell className={classes.tableCell}></TableCell>
              <TableCell className={classes.tableCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.server}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.5rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
