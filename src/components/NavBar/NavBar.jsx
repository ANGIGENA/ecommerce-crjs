import React from 'react'
import CartWidget from './CartWidget'
import './NavBarStyle.css'

const NavBar = () => {
  return (
    <div className='container'>
<img src="https://media.istockphoto.com/id/1480306277/es/vector/letra-g-monograma-flecha-cursor-direcci%C3%B3n-puntero-hacia-adelante-arriba-simple-dise%C3%B1o.jpg?s=612x612&w=0&k=20&c=yuTxWN61zHCOBat_awGk0HqXUaPkIzLur3lxb-7k4gE=" alt="" />
        <h1>G-Tech</h1>
        
        <div className='items'>
            <a>Celulares</a>
            <a>Electrodomésticos</a>
            <a>Computación</a>
            <a>Soporte</a>
        </div>
            
        <div className='cart-widget'>
            <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar