import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./page/Home";

function Layout() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default Layout;
