import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import FormCheckout from './FormCheckout'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import "./Checkout.css"



const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice } = useContext(CartContext)

    const handleChangeInput = (event) => {
    setDataForm ({...dataForm,[event.target.name] : event.target.value})
}

    const handleSumbitForm = (event) => {
        event.preventDefault()
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate( new Date() )
        }
        uploadOrder(order)
    }

    const uploadOrder = async (newOrder)=> {
        try {
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setOrderId(response.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div className='checkout'>
        {
            orderId ? (
                <div>
                    <h2 className='title-order'>Orden subida correctamente, su numero de seguimiento:</h2>
                    <h3 className='num-ord'>{orderId}</h3>
                </div>
            ):(
                <FormCheckout
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSumbitForm={handleSumbitForm}
                />
            )
        }
        
    </div>
        
  )
}

export default Checkout