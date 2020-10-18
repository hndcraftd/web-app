import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { v4 as uuid } from "uuid";
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
import { useHistory } from "react-router";

const data = [
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 30.5,
    customer: {
      name: "Jehf Dene",
    },
    createdAt: 1603003794382,
    status: "in progress",
  },
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 25.1,
    customer: {
      name: "Rara Idrees",
    },
    createdAt: 1603003794382,
    status: "completed",
  },
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 10.99,
    customer: {
      name: "Laro Reyes",
    },
    createdAt: 1603003794382,
    status: "completed",
  },
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 96.43,
    customer: {
      name: "DJ Harris",
    },
    createdAt: 1603003794382,
    status: "pending",
  },
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 32.54,
    customer: {
      name: "Raul Fai",
    },
    createdAt: 1603003794382,
    status: "delivered",
  },
  {
    id: uuid(),
    ref: "55c9ac78-7e3a-497f-b6b9-3a1bbf820b2f",
    amount: 16.76,
    customer: {
      name: "Shirls Whirls",
    },
    createdAt: 1603003794382,
    status: "in progress",
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
  const history = useHistory();

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
              <TableRow
                className="hover-pointer"
                hover
                key={order.id}
                onClick={(e) => {
                  return history.push(`/orders/${order.id}`);
                }}
              >
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
