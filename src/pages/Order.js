import React from "react";
import { useHistory } from "react-router";
import Layout from "../components/Layout";
import { Container, Typography } from "@material-ui/core";
import { getTransactions } from "../services/nrcDigitalBanklng";

export default function Order() {
  const history = useHistory();

  const orderID = history.location.pathname.replace("/orders/", "");

  React.useEffect(() => {
    getTransactions().then((data) => console.log(data));
  });

  return (
    <Layout shouldShowHeader={false}>
      <Container>Hellpsfuaihwhfi</Container>
    </Layout>
  );
}
