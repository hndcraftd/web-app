import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BroadCraft Dark.svg"
import tokenCache from "../services/tokenCache";

const Nav = () => {
  const token = tokenCache.get();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={Logo} width="320" alt="Lorem Ipsum" style={{padding: "12px"}}/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/start" className="nav-link">
              Getting Started
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/benefits" className="nav-link">
              Benefits
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
        {!token ? (
          <Link
            className="login-button btn btn-outline-success my-2 my-sm-0 mr-3"
            to="/auth"
          >
            Login
          </Link>
        ) : (
          <Link
            className="login-button btn btn-outline-success my-2 my-sm-0 mr-3"
            to="/dashboard"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
