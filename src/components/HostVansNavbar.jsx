import React from "react";
import { NavLink } from "react-router-dom";

const HostVansNavbar = () => {
  return (
    <nav className="detail-nav">
      <NavLink to="."
      end
      style={({isActive})=> isActive? {color: "red"} : {color: "black"}}>
        <span>details</span>
      </NavLink>
      <NavLink to="price"
      style={({isActive})=> isActive? {color: "red"} : {color: "black"} }>
        <span>price</span>
      </NavLink>
      <NavLink to="photos"
      style={({isActive})=> isActive? {color: "red"} : {color: "black"}} >
        <span>photos</span>
      </NavLink>
    </nav>
  );
};

export default HostVansNavbar;
