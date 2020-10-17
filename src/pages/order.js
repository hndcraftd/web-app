import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function order() {
  return (
    <>
      <Nav />
      <main className="container-fluid d-flex mr-3">
        <Sidebar />
        <div>
          <h1>Order Page</h1>
        </div>
      </main>
      
    </>
  );
}
