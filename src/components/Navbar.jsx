import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to={"/"} className="logo">
          <span>#VITEGE</span>
        </Link>
      </div>
      <nav className="nav">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "color-link" : "")}
        >
          <span>host</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "color-link" : "")}
          to={"/about"}
        >
          <span>about</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "color-link" : "")}
          to={"/vans"}
        >
          <span>vans</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
