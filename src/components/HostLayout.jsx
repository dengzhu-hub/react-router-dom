import React from "react";
import HostNavbar from "./HostNavbar";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
};

export default HostLayout;
