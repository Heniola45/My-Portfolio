import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

function Layout() {
  return (
    <>
      <Nav/>
      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
