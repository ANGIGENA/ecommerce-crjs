import React from "react";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { idProduct } = useParams()

    const getProducts = async() => {
      try {
        const docRef = doc(db, "products", idProduct )
        const dataDb = await getDoc(docRef)

        const data = {id: dataDb.id, ...dataDb.data()}
        setProduct(data)
      } catch (error) {
        
      }
    }

    useEffect(() => {
      getProducts()
    }, [idProduct]);

  return (
  <ItemDetail product={product}/>
);
};

export default ItemDetailContainer;
