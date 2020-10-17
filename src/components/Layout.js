import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

import "../scss/components/layout.scss";

export default function Layout({ children, shouldShowSidebar = true }) {
  return (
    <>
      <Nav />
      <main className="container-fluid d-flex">
        {shouldShowSidebar && <Sidebar />}
        {children}
      </main>
    </>
  );
}
