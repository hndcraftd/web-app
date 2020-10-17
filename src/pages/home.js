import React from "react";
import Layout from "../components/Layout";
import { Grid, Container, Button, Icon } from "@material-ui/core";

export default function Home() {
  return (
    <Layout shouldShowSidebar={false}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item>
            <br />
            <br />
            <br />
            <h1>Build transparent customer products.</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
            <Button variant="text" color="">
              See how we can help 🎥
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
