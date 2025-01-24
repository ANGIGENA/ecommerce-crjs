import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, addProductInCart}) => {
    const [count, setCount] = useState(1)

    const handleClickRemove = () => {
    if( count > 1) {
        setCount( count - 1)
    }
        
    }

    const handleClickAdd = () => {
    if( count < stock ) {
        setCount( count + 1)
    }
        
    }


    return(
        <div className="count">
            <a className= "button-count" onClick={handleClickRemove}>-</a>
            <p className="number">{count}</p>
            <a className="button-count" onClick={handleClickAdd}>+</a> 
            <a className="add" onClick={() => addProductInCart(count)}>Agregar al carrito</a>
        </div>
    )
}

export default ItemCount

