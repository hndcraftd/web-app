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
import WidgetsIcon from "@material-ui/icons/Widgets";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.blue[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.blue[900],
  },
  differenceValue: {
    color: colors.blue[900],
    marginRight: theme.spacing(1),
  },
}));

const OrdersCard = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Current Orders
            </Typography>
            <Typography color="textPrimary" variant="h3">
              11
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <WidgetsIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default OrdersCard;
