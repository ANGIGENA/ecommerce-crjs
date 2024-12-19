import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail-content">
      <img className="detail-image" src={product.image} alt="" />
      <div className="detail-product">
        <h2 className="detail-title">{product.name}</h2>
        <p className="detail-desc">{product.description}</p>
        <p className="detail-price">$<span className="style-price">{product.price}</span></p>
        <p className="detail-stock">Cantidad disponible: <span className="color-stock">{product.stock}</span> </p>
      </div>
    </div>
  );
};

export default ItemDetail;
