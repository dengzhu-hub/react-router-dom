import React from "react";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to={"/home"} className="logo">
          <span>#VITEGE</span>
        </Link>
      </div>
      <nav className="nav">
       
        <Link className="nav-item" to={"/about"}>
          <span>about</span>
        </Link>
        <Link className="nav-item" to={"/vans"}>
          <span>vans</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
