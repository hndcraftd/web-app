import React from "react";
import Layout from "../components/Layout";
import { Container, Grid } from "@material-ui/core";
import CustomerCard from "../components/Cards/Customers";
import OrdersCard from "../components/Cards/OrderCard";
import OrdersCompleteCard from "../components/Cards/OrdersComplete";
import ProgressCard from "../components/Cards/OrderStatus";
import RecentSales from "../components/Cards/RecentSales";
import ProductsCard from "../components/Cards/Products";

export default function Insights() {
  return (
    <Layout shouldShowHeader={false}>
      <Container maxWidth={false} >
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <OrdersCard />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <OrdersCompleteCard />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CustomerCard />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ProgressCard />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <RecentSales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <ProductsCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
