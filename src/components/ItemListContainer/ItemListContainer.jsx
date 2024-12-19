import React from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { FadeLoader } from "react-spinners";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  useEffect(()=>{
    setLoading(true)

    getProducts()
    .then((data) => {
      if (idCategory){
        const filterProducts = data.filter((product)=> product.category === idCategory)
        setProducts(filterProducts)
      }else {
        setProducts(data)
      }
      })
      
    .catch((error) =>
      {console.error(error)})
    
    .finally(() => {
      setLoading(false)})
  }, [idCategory])

  

  return (
  <div className="greeting">
      <h2>{greeting}</h2>
      {
        loading === true ? (<div style={{height: "calc(50vh - 1rem)"}}><FadeLoader color= "#15B0AB" /></div>) : (<ItemList products={products}/>)
      }
    </div>
  );
};

export default ItemListContainer;
