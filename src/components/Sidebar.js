import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddCircle, Drafts, Equalizer, Home, Inbox, Receipt, Settings } from "@material-ui/icons";
import React, { ReactElement } from "react";
import routes from "../App.js";
import { useHistory } from "react-router";

const styles = makeStyles((theme) => ({
  taskSidebar: {
    background: "#FFFFFF",
    width: 200,
    gridArea: "sidebar",
    padding: 15,
    "& > *": {
      marginBottom: 10,
    },
  },
}));


const menuItems = [
  {
    title: "Dashboard",
    icon: <Home />,
    path: "/",
  },
  {
    title: "Order",
    icon: <Receipt />,
    path: "/order",
  },
  {
    title: "Insights",
    icon: <Equalizer />,
    path: "/insights",
  },
];

export default function Sidebar(){
  const history = useHistory();
  const classes = styles();
  return (
    <div className={classes.taskSidebar}>
      <List component="nav">
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            button
            style={{
              borderRadius: 100,
              marginBottom: 10,
            }}
            selected={item.path === history.location.pathname}
            onClick={() => {
              history.push(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
