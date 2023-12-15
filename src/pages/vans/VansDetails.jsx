import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import previous from "../../assets/previous.png";
const VansDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState();
  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const res = await fetch(`/api/vans/${id}`);
        // console.log(res);
        if (!res.ok) throw new Error("Could not fetch vans");
        const data = await res.json();
        console.log(data.vans);
        return setVan(data.vans);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataById();
  }, [id]);

  return (
    <article>
      <div className="van-top">
        <Link className="previous-box" to="/vans">
          <img className="previous" src={previous} alt="" />
          <span>Back to vans</span>
        </Link>
      </div>
      <div className="van-details--container">
        <div className="van-img">
          <img className="img" src={van?.imageUrl} alt="" />
        </div>
        <div className="details-info">
          <h2>{van?.name}</h2>
          <p>{van?.description}</p>
          <div className="van-bottom">
            <p className="van-price">${van?.price}</p>
            <Link className="van-btn" to={`/vans/${van?.id}/edit`}>
              <span>{van?.type}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VansDetails;
