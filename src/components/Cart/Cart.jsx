import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

  if(cart.length === 0){
    return(<div className="empty-cart">
      <h2 className="empty-title"> No se encuentra ningún producto </h2>
      <h5 className="empty-title-second">¡Agrega productos al carrito! </h5>
      <Link className="empty-back" to="/">Volver a la tienda</Link>
    </div>
    )
  }

  return (
   <div className="cart">
    <h1 className="title-cart">Mi carrito</h1>
    <ul>
      {
    cart.map((productCart) => ( 
      <li className="prod" key={productCart.id}>
        <img className="img-prod" src={productCart.image} alt="" />
        <p>{productCart.name}</p>
        <p>Cantidad: {productCart.quantity}</p>
        <p>Precio c/u: <br /> ${productCart.price}</p>
        <a className="btn-del" onClick={ () => deleteProductById(productCart.id)}>-</a>
      </li>
    ))
  }
    </ul>
    <h3  className="price-cart">Precio total: ${totalPrice()}</h3>
    <Link className="btn-buy" to="/checkout">Continuar con mi compra</Link>
    <a className="del-all" onClick={deleteCart}>Eliminar todos los productos del carrito </a>
  </div>
  );
};

export default Cart;
