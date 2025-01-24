import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'


const Item = React.memo ( ({product}) => {
  return (
    <Link to={"/detail/"+ product.id} className='card'>
        <img className='img-card' src={product.image} alt="" />
    <div className='desc-card'>
        <p >{product.name}</p>
        <p className='text-price'>${product.price}</p>
        <p className='view-detail'>Ver más</p>
    </div>
</Link>
  )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps) )

export default Item