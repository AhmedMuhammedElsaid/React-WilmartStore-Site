import React from 'react'
import Hero from '../components/Hero'
import productBcg from '../images/productsBcg.jpeg'
import Products from '../components/ProductsPage/Products'


export default function ProductsPage() {
    return(
        <>
        <Hero img={productBcg}/>
       <Products/>
        </>
    );
}