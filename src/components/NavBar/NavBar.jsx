import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="container">
      <Link to="/" className="link-content">
        <img
        className="img-banner"
        src="https://media.istockphoto.com/id/1480306277/es/vector/letra-g-monograma-flecha-cursor-direcci%C3%B3n-puntero-hacia-adelante-arriba-simple-dise%C3%B1o.jpg?s=612x612&w=0&k=20&c=yuTxWN61zHCOBat_awGk0HqXUaPkIzLur3lxb-7k4gE="
        alt=""
        />
        <h1 className="logo">G-Tech</h1>
      </Link>

      <div className="categories">
        <NavLink to="/category/cellphones" className={ ( { isActive } )=> isActive ? "category-active" : "category" }>
          Celulares
        </NavLink>
        <NavLink to="/category/appliances" className={ ( { isActive } )=> isActive ? "category-active" : "category" }>
          Electrodomésticos
        </NavLink>
        <NavLink to="/category/computing" className={ ( { isActive } )=> isActive ? "category-active" : "category" }>
          Computación
        </NavLink>
        <NavLink to="/support/soporte" className={ ( { isActive } )=> isActive ? "support-active" : "support" }>
          Soporte
        </NavLink>
      </div>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
