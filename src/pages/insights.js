import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function insights() {
  return (
    <>
      <Nav />
      <main className="container-fluid d-flex">
        <Sidebar />
        <h1>Insights Page</h1>
      </main>

      
    </>
  );
}
