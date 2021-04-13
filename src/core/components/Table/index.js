import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '../Button';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  tableWrapper: {
    width: '100%',
  },
});

const CustomTable = ({
  tableData = [],
  tableTitles = [],
  sequencedFields = [],
  handleDelete,
  handleEdit,
}) => {
  const handleDeleteItem = (id) => () => {
    handleDelete(id);
  };
  const handleEditItem = (item) => () => {
    handleEdit(item);
  };
  const classes = useStyles();
  //   const fieldsArray = tableData && tableData.length > 0 ? Object.keys(tableData[0]) : [];
  return (
    <div className={classes.tableWrapper}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {tableTitles.map((title, id) => (
                <StyledTableCell key={id} align='center'>
                  {title}
                </StyledTableCell>
              ))}
              <StyledTableCell align='center' />
              <StyledTableCell align='center' />
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row) => (
              <StyledTableRow key={row.id}>
                {sequencedFields.map((field) => (
                  <StyledTableCell key={field} align='center'>
                    {row[field] || '-'}
                  </StyledTableCell>
                ))}
                <StyledTableCell align='center'>
                  <Button onClick={handleEditItem(row)} color='primary'>
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Button onClick={handleDeleteItem(row.id)} color='secondary'>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
