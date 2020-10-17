import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function dashboard() {
  return (
    <>
      <Nav />
      <main className="container-fluid d-flex">
        <Sidebar />
        <h1>Dashboard Page</h1>
      </main>
    </>
  );
}
