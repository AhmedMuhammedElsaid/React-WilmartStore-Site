import React from 'react'
import cartBcg from '../images/storeBcg.jpeg'
import Hero from '../components/Hero';
import CartSection from '../components/CartPage';
export default function CartPage() {
    return (
        <>
        <Hero img={cartBcg}/>
         <CartSection/>
        </>
    );
}