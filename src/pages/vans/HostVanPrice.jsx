import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const van = useOutletContext();
  return <div>
    <p className="price"><strong>$</strong>{van?.price}</p>
  </div>
};

export default HostVanPrice;
