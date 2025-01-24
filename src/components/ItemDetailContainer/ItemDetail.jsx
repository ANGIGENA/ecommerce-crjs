import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProduct } = useContext(CartContext);

  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };

    addProduct(productCart);

    setShowItemCount(false)
  };

  return (
    <div className="detail-content">
      <img className="detail-image" src={product.image} alt="" />
      <div className="detail-product">
        <h2 className="detail-title">{product.name}</h2>
        <p className="detail-desc">{product.description}</p>
        <p className="detail-price">
          $<span className="style-price">{product.price}</span>
        </p>
        <p className="detail-stock">
          Cantidad disponible:{" "}
          <span className="color-stock">{product.stock}</span>{" "}
        </p>

        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
          ) : (
            <Link className="buy-finish" to="/cart" > Terminar compra </Link>
          )
        }
        
      </div>
    </div>
  );
};

export default ItemDetail;
