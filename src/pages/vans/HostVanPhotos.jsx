import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const van = useOutletContext();
  return <div className="photo-container">
    <figure className="figure-img">
      <img src={van?.imageUrl} alt="" />
    </figure>
  </div>;
};

export default HostVanPhotos;
