import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const data = [
  {
    id: uuid(),
    ref: "DX14562",
    amount: 30.5,
    customer: {
      name: "Jehf Dene",
    },
    createdAt: 1603003794382,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "GE50412",
    amount: 25.1,
    customer: {
      name: "Rara Idrees",
    },
    createdAt: 1603003794382,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "GE23468",
    amount: 10.99,
    customer: {
      name: "Laro Reyes",
    },
    createdAt: 1603003794382,
    status: "refunded",
  },
  {
    id: uuid(),
    ref: "QE81230",
    amount: 96.43,
    customer: {
      name: "DJ Harris",
    },
    createdAt: 1603003794382,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "UP41254",
    amount: 32.54,
    customer: {
      name: "Raul Fai",
    },
    createdAt: 1603003794382,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Shirls Whirls",
    },
    createdAt: 1603003794382,
    status: "delivered",
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: "flex-end",
  },
}));

const RecentSales = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Recent Orders" />
      <Divider />
      <Box minWidth={800}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>
                  {moment(order.createdAt).format("MM/DD/YYYY")}
                </TableCell>
                <TableCell>
                  <Chip color="primary" label={order.status} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default RecentSales;
