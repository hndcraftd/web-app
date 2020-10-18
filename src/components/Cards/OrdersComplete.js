import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CompletedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.cyan[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.cyan[900],
  },
  differenceValue: {
    color: colors.cyan[900],
    marginRight: theme.spacing(1),
  },
}));

const OrdersCompleteCard = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Completed Orders
            </Typography>
            <Typography color="textPrimary" variant="h3">
              214
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CompletedIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default OrdersCompleteCard;
