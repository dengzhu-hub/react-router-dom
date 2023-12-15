import React, { useState } from "react";
import HostVansNavbar from "./HostVansNavbar";
import { Outlet, useOutletContext } from "react-router-dom";

const HostVansLayout = () => {
  const vans = useOutletContext();
  console.log(vans);
  const [van, setVan] = useState(null);

  return (
    <>
      <HostVansNavbar />
      <Outlet context={vans}/>
    </>
  );
};

export default HostVansLayout;
