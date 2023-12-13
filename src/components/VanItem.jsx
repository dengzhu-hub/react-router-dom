import React from "react";
import { Link } from "react-router-dom";
const VanItem = ({ van }) => {
  return (
    <article>
      <div className="van-item-container">
        <div className="van-item-image">
          <img src={van.imageUrl} alt={van.name} />
        </div>
        <div className="van-item-info">
          <h2>{van.name}</h2>

          <div className="van-item-price">
            <span className="van-item-price-label">Price</span>
            <span className="van-item-price-value">${van.price}</span>
          </div>

          <Link to={`/vans/${van.id}`} className="van-item-cta">
            <span className="link-button">{van.type}</span>
          </Link>
        </div>
      </div>
      <style jsx>{``}</style>
    </article>
  );
};

export default VanItem;
