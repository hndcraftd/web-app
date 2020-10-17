// import React from "react";
// import Layout from "../components/Layout";

import React from 'react';
import { useHistory } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/Layout';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, description, progress, date, customer) {
  return {id, description, progress, date, customer};
}

const rows = [
  createData("DX14562", "Black NCR Tee x2, Custom Embroidered Sweater", "6/14", "Oct 17, 2020", "keocode@fiu.edu"),
  createData("GE50412", "Beaded Necklace", "7/8", "Oct 15, 2020", "ireye042@fiu.edu"),
  createData("GE23468", "Beaded Necklace", "7/8", "Oct 12, 2020", "keocode@fiu.edu"),
  createData("QE81230", '14" Pikachu Crochet Plushie', "8/10", "Aug 15, 2020", "drshirls@gmail.com"),
  createData("UP41254", "Beaded Necklace", "8/8", "Aug 11, 2020", "jehfdoe@outlook.com")
];

export default function Order() {
  const classes = useStyles();
  const history = useHistory();

  function navigateToOrder(id){
    history.push(`/orders/${id}`);
  }
  return (
    <Layout shouldShowHeader={false}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID  </TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Customer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} onClick={()=>navigateToOrder(row.id)}>
              <TableCell component="th" scope="row" >
                {row.id}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.customer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}
