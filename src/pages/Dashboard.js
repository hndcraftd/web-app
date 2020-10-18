
import React from "react";
import Layout from "../components/Layout";
import { Container, Grid } from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function Dashboard() {
  return (
    <Layout shouldShowHeader={false}>
          <Container maxWidth={false} className="mt-5">
          <h1>Hello, Name</h1>
        </Container>
    </Layout>
  );
}
