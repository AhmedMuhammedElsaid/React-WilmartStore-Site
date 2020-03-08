import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import {FaBars,FaCartPlus} from 'react-icons/fa'
import logo from '../images/logo.svg'



export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
               const {handleCart,handleSidebar,cartItems}=value
             return (
                 <NavWrapper>
                <div className="nav-center">
                    <FaBars className="nav-icon" onClick={handleSidebar}/>
                    <img src={logo} alt="Store Logo"/>
                    <div className="nav-cart">
                        <FaCartPlus className="nav-icon" onClick={handleCart}>
                        </FaCartPlus>
                        <div className="cart-items">
                            {cartItems}
                        </div>
                    </div>
                </div>
                 </NavWrapper> ) 
            }}
        </ProductConsumer>
    )
}

const NavWrapper=styled.nav`
position:sticky;
position:-webkit-sticky;
padding: 1rem 1.5rem;
top:0;
width:100%;
background:var(--mainGrey);
border-bottom: 3px solid var(--primaryColor);
z-index:1;
.nav-center{
    display:flex;
    align-items:center;
    justify-content:space-between; 
    max-width:1170px;
    margin:0 auto;
}
.nav-icon{
    font-size:1.5rem;
    cursor: pointer;
}
.nav-cart{
    position:relative;
}
.cart-items{
    position:absolute;
    color:var(--mainWhite);    
    background:var(--primaryColor);
    border-radius:50%;
    top:-12px;
    right:-15px;
    padding:0 5px;
}
`