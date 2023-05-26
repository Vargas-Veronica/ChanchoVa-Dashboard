import { Card } from "../../components/Card"
import React from "react";
import {useState, useEffect} from "react"
import { getProducts } from "../../services/products.service"
import { LastDataContainer } from "../../components/lastdataContainer"

export const Dashboard = () => {
   /* const [products, setproducts] = useState
    useEffect(() =>{
        const fetchProducts = async ()=> {
            return await getProducts()
        }
        setproducts((fetchProducts))},[products]
)
useEffect((fetchProducts) =>{
  setproducts(fetchProducts)
    },[products])*/
   
    return (
        /* <!-- Content Row Top --> */
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
        
            {/* <!-- Content Row Movies--> */}
            <div className="row">
           <Card color="primary" title="Products in data base" quatity={21} icon="fa-film"/>

            <Card color="danger" title="Products in data base" quatity={21} icon="fa-film"/>
            <Card color="warning" title="Products in data base" quatity={21} icon="fa-film"/>
            </div>

            <div className="row">
                <LastDataContainer />
            </div>
        </div>
    )
}