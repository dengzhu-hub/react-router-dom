import React, { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import previous from "../../assets/previous.png";
const HostVanDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [van, setVan] = useState();
  console.log(van);
  useEffect(() => {
    console.log("dididi");
    const fetchVanData = async () => {
      try {
        const res = await fetch(`/api/host/vans/${id}`);
        if (res.ok) {
          const data = await res.json();
          const [obj] = data.vans;

          console.log(obj);
          setVan(obj);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVanData();
  }, []);
  return (
    <>
      <section>
        <Link to=".." relative="path" className="detail-back">
          <img src={previous} alt="" />
          <span>back to all vans</span>
        </Link>

        <div className="detail-container">
          <div className="detail-top">
            <div className="detail-img">
              <img src={van?.imageUrl} alt="" />
            </div>
            <div className="detail-info">
              <button className="detail-btn">{van?.type}</button>
              <div className="detail-text">
                <p>{van?.name}</p>
                <p>{van?.price}</p>
              </div>
            </div>
          </div>
          <Outlet context={van} />
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
