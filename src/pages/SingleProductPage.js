import React from 'react'
import Hero from '../components/Hero'
import singleProductBcg from '../images/singleProductBcg.jpeg'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default function SingleProduct() {
    return (
        <>
            <Hero img={singleProductBcg} />
            <ProductConsumer>
                {value => {
                    const {singleProduct,addToCart,loading}=value;

                    if(loading){
                        console.log("heloo from loading");
                        return <h1>Loading</h1>
                    }
                    const {
                        company,
                        description,
                        id,
                        price,
                        title,
                        image,
                        }=singleProduct;
                    return (
                        <section className="py-5">
                            <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <img src={`../${image}`} 
                            alt="Single Product"
                            className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                <h5 className="text-title mb-4">model : {title} </h5>
                                <h5 className="text-capitalize text-muted mb-4">company : {company} </h5>
                                <h5 className="text-capitalize text-main mb-4">price : ${price} </h5>
                                <p className="text-capitalize text-tile mt-3">
                                some info about the product : ${description} </p>
                                <button className="main-link"
                                style={{margin:'.75rem'}}
                                 onClick={()=> addToCart(id)}>
                                add to cart
                                </button>
                                <Link to="/products"
                                className="main-link"   style={{margin:'.75rem'}}>
                                    Back To Products
                                </Link>
                                </div>
                            </div>
                            </div>
                        </section>
                    )
                   

                    
                }}
            </ProductConsumer>
        </>
    );
}