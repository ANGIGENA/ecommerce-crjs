import React from 'react'
import Item from './Item'
import "./ItemList.css"

const ItemList = ({ products }) => {
  return (
    <div className='content-card'>      {
        products.map((product)=>(
        <Item product={product} key={product.id}/>
    ))
      }</div>
  )
}

export default ItemList