// import React from "react";
// import Layout from "../components/Layout";

import React from "react";
import { useHistory } from "react-router";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import RecentSales from "../components/Cards/RecentSales";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, description, progress, date, customer) {
  return { id, description, progress, date, customer };
}

const rows = [
  createData(
    "DX14562",
    "Black NCR Tee x2, Custom Embroidered Sweater",
    "6/14",
    "Oct 17, 2020",
    "keocode@fiu.edu"
  ),
  createData(
    "GE50412",
    "Beaded Necklace",
    "7/8",
    "Oct 15, 2020",
    "ireye042@fiu.edu"
  ),
  createData(
    "GE23468",
    "Beaded Necklace",
    "7/8",
    "Oct 12, 2020",
    "keocode@fiu.edu"
  ),
  createData(
    "QE81230",
    '14" Pikachu Crochet Plushie',
    "8/10",
    "Aug 15, 2020",
    "drshirls@gmail.com"
  ),
  createData(
    "UP41254",
    "Beaded Necklace",
    "Aug 11, 2020",
    "jehfdoe@outlook.com"
  ),
];

export default function Order() {
  const classes = useStyles();
  const history = useHistory();

  function navigateToOrder(id) {
    history.push(`/orders/${id}`);
  }
  return (
    <Layout shouldShowHeader={false}>
      <Container className="mt-5">
        <RecentSales />
      </Container>
    </Layout>
  );
}
