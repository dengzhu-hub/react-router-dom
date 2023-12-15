import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const van = useOutletContext();
  console.log(van);
  return (
    <section>
      <div className="info-box">
        <h3>
          <strong>name</strong>: {van?.name}
        </h3>
        <h3 className="desc">
          <strong>description</strong>: {van?.description}
        </h3>
        <h3>
          <strong>price</strong>: {van?.price}
        </h3>
        <h3>
          <strong>category</strong>: {van?.type}
        </h3>
        <h3>
          <strong>location</strong>:China
        </h3>
      </div>
    </section>
  );
};

export default HostVanInfo;
