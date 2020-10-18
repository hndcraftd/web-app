import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, description, progress, date, customer) {
  return { id, description, progress, date, customer };
}

export default function Order() {
  const classes = useStyles();
  const history = useHistory();

  const orderID = history.location.pathname.replace("/orders/", "");

  function navigateToOrder(id) {
    history.push(`/order/${id}`);
  }

  return (
    <Layout shouldShowHeader={false}>
      <h1>{`Order #${orderID}`}</h1>
    </Layout>
  );
}
