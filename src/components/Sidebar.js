import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Equalizer, Home, Receipt } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import tokenCache from "../services/tokenCache";
import Image from "material-ui-image";
import Logo from "../assets/BroadCraft Light.svg"
import "../scss/components/sidebar.scss";

const menuItems = [
  {
    title: "Dashboard",
    icon: <Home style={{ color: "#fff" }} />,
    path: "/dashboard",
  },
  {
    title: "Orders",
    icon: <Receipt style={{ color: "#fff" }} />,
    path: "/orders",
  },
  {
    title: "Insights",
    icon: <Equalizer style={{ color: "#fff" }} />,
    path: "/insights",
  },
];

export default function Sidebar() {
  const history = useHistory();

  const logout = (token) => {
    tokenCache.delete(token);
    history.push("/");
  };
  return (
    <div className="sidebar">
      <div>
        <img
          src={Logo}
          cover={false}
          width={164}
          style={{padding: "12px"}}
        />
        <br />
        <br />
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
      <button
        className="btn btn-danger my-2 my-sm-0 mr-3"
        type="button"
        onClick={(token) => logout(token)}
      >
        Logout
      </button>
    </div>
  );
}
