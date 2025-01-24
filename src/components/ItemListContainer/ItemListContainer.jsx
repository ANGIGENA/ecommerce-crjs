import React from "react";
import "./ItemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { FadeLoader } from "react-spinners";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { idCategory } = useParams()

  const collectionName = collection(db, "products")

  const getProducts = async() =>{
    try {
      setLoading(true)
      const dataDb = await getDocs(collectionName)

      const data = dataDb.docs.map((productDb)=>{
        return {id: productDb.id, ...productDb.data() }
      })

      setProducts(data)

    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  const getProductsByCategory = async ()=> {
    try {
      setLoading(true)
      const q = query(collectionName, where("category", "==", idCategory))
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map((productDb)=>{
        return {id: productDb.id, ...productDb.data() }
      })
  
      setProducts(data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }

  }


  useEffect(()=>{
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
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
