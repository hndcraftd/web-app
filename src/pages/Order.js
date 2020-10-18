import React from "react";
import { useHistory } from "react-router";
import Layout from "../components/Layout";
import { Container, Typography, Grid } from "@material-ui/core";
import { getTransactions } from "../services/nrcDigitalBanklng";
import VerticalLinearStepper from "../components/VerticalLinearStepper";

const steps = [
  {
    photo:
      "https://pixabay.com/get/53e6d6454d51af14f6da8c7dda79357d133edae44e507749762f7bd69544c0_1280.jpg",
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
  you're willing to spend on clicks and conversions, which networks
  and geographical locations you want your ads to show on, and more.`,
    step: 4,
  },
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
  you're willing to spend on clicks and conversions, which networks
  and geographical locations you want your ads to show on, and more.`,
    step: 3,
  },
  {
    photo:
      "https://i.insider.com/5d1c86c8a17d6c232c327248?width=600&format=jpeg&auto=webp",
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
  you're willing to spend on clicks and conversions, which networks
  and geographical locations you want your ads to show on, and more.`,
    step: 2,
  },
  {
    photo:
      "https://i.insider.com/5d1c86c8a17d6c232c327248?width=600&format=jpeg&auto=webp",
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
  you're willing to spend on clicks and conversions, which networks
  and geographical locations you want your ads to show on, and more.`,
    step: 1,
  },
];

export default function Order() {
  const history = useHistory();

  const orderID = history.location.pathname.replace("/orders/", "");

  React.useEffect(() => {
    getTransactions().then((data) => console.log(data));
  });

  return (
    <Layout shouldShowHeader={false}>
      <Container maxWidth="sm">
        <Grid container spacing={10}>
          <Grid item>
            <br />
            <br />
            <h1>The manifacturing experience for Jehf.</h1>
            <br />
            <p>
              npm loves you. Here is some info about how well it's doing. (You
              can also follow these updates at @npmstatus on Twitter!)
            </p>
          </Grid>

          <Grid item>
            <Typography
              variant="h2"
              fontWeight={500}
              style={{ fontSize: "1.5em" }}
            >
              Yellow Ring
            </Typography>

            <VerticalLinearStepper steps={steps} />
          </Grid>

          <Grid item>
            <Typography
              variant="h2"
              fontWeight={500}
              style={{ fontSize: "1.5em" }}
            >
              Diamond Ring
            </Typography>
            <VerticalLinearStepper steps={steps} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
