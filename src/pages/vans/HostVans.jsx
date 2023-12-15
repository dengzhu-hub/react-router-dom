import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const res = await fetch("/api/host/vans");
        // console.log(res);
        if (!res.ok) throw new Error("Could not fetch vans");
        const data = await res.json();
        console.log(data.vans);
        return setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataById();
  }, []);
  return (
    <section className="host-vans--container">
      <h1 className="host-vans-title">your listed vans</h1>
      {vans.length ? (
        <ul className="vans-list">
          {vans?.map(van => (
            <Link
              to={`/host/vans/${van.id}`}
              aria-label="link to "
              className="van-link"
            >
              <div className="vans-item">
                <div className="vans-img">
                  <img src={van.imageUrl} className="" alt="" />
                </div>

                <div className="vans-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </section>
  );
};

export default HostVans;
