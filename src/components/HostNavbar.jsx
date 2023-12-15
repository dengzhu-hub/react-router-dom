import React from "react";
import { NavLink } from "react-router-dom";

const HostNavbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <header>
      <nav>
        <NavLink
          to={"."}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
        >
          <span>dashboard</span>
        </NavLink>
        <NavLink
          to={"income"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <span>income</span>
        </NavLink>
        <NavLink
          to={"vans"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <span>vans</span>
        </NavLink>
        <NavLink
          to={"reviews"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <span>review</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default HostNavbar;
