import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaSearch , FaCartPlus} from 'react-icons/fa'
export default function Product({product}) {

    return (
   
        <ProductConsumer>
        {value =>{
            const {setSingleProduct ,addToCart}=value;
            return(
                <ProductWrapper className="col-10 mx-auto col-sm-8 
                 col-md-6 col-lg-4 my-3
                ">
                    <div className="card">
                    <div className="img-container">
                <img className="card-img-top p-5" src={product.image} 
                style={{height:"320px"}}

                />
                <div className="product-icon">
                    <Link to={`/products/${product.id}`}>
                        <FaSearch className="icon" onClick={()=>setSingleProduct(product.id)}/>
                    </Link>
                    <FaCartPlus className="icon" onClick={()=>addToCart(product.id)}/>
                </div>
                    </div>
                <div className="card-body d-flex
                justify-content-between">
                <p className="mb-0 ">{product.title}</p>
                <p className="mb-0 text-main "> ${product.price}</p>
                </div>
                </div>
           
                </ProductWrapper>
            );
        }}
        </ProductConsumer>
    )
}

const ProductWrapper=styled.div`
.card{
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    transition:var(--mainTransition);
    height:100%;
}
.card:hover{
    box-shadow: 8px 10px 5px 0px rgba(0,0,0,0.6);
    cursor: pointer;
}
.card-img-top{
    transition:var(--mainTransition)
}
.card:hover .card-img-top{
    transform:scale(1.3);
    opacity:.3;
}
.img-container{
    position:relative;
}
.product-icon{
    position:absolute;
    top:50%;
    left:50%;
    transition:var(--mainTransition);
    transform:translate(-50%,-50%);
    opacity:0;
}
.icon{
    font-size:2.5rem;
    padding:.5rem;
    margin:1rem;
    color:var(--primaryColor);
    background:var(--mainBlack);
    border-radius:.5rem;
}
.card:hover .product-icon{
    opacity:1;
}
.card-body{
    font-weight:bold;
    letter-spacing:2px;
    text-transform:uppercase;

}
`