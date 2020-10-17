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

import "../scss/components/sidebar.scss"


const menuItems = [
  {
    title: "Dashboard",
    icon: <Home style={{color: "#fff"}} />,
    path: "/",
  },
  {
    title: "Order",
    icon: <Receipt style={{color: "#fff"}}/>,
    path: "/order",
  },
  {
    title: "Insights",
    icon: <Equalizer  style={{color: "#fff"}}/>,
    path: "/insights",
  },
];

export default function Sidebar(){
  const history = useHistory();
  return (
    <div className="sidebar">
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
