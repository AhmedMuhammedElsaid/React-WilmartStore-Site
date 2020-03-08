import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
export default function Footer () {
    return(
        <ProductConsumer>
            {value =>{
                return(
                <FooterWrapper>
                <div className="container py-3">
                <div className="row">
                <div className="col-md-6">
                <p className="text-capitalize"> copyrights &copy; 
                {new Date().getFullYear()} Ahmed Muhammed Elsaid
                 </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                {value.socialIcons.map(value=>{
                    return(
                    <a href={value.path} key={value.id} target="_blank" >
                        {value.icon}
                    </a>)
                })}
                </div>
                </div>
                </div>

                </FooterWrapper>
                
                )}}
        </ProductConsumer>
    )
}


const FooterWrapper =styled.footer`
background:var(--darkGrey);
color:var(--mainWhite);
 .icon{
     font-size:2rem;
color:var(--mainWhite);
transition:var(mainTransition);
 }
 .icon:hover{
     color:var(--primaryColor);
     cursor: pointer;
 }
`