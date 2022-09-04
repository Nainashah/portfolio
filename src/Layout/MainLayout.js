import { Outlet } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";

export default function MainLayout () {
  return (
    <div style={{height: '500px'}}>
      <Outlet />
    </div>
  );
};
