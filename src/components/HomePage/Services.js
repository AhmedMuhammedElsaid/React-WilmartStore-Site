import React, { Component } from 'react'
import {FaDolly,FaRedo,FaDollarSign} from 'react-icons/fa'
import styled from 'styled-components'


export default class Services extends Component {
    state=[
        {
            id:1,
            icon:<FaDolly className="icon"/>,
            title:'free shipping',
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
        },      {
            id:2,
            icon:<FaRedo className="icon"/>,
            title:'free shipping',
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
        },
        {
            id:3,
            icon:<FaDollarSign className="icon"/>,
            title:'free shipping',
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
        },
    ]
    render() {
        return (
            <ServicesWrapper>
                <div className="container">
                <div className="row">
                {this.state.map(item=>{
                    return(
                <div className=" col-10 col-sm-6 col-md-4 mx-auto my-3 text-center" 
                key={item.id}>
                <div className="service-icon">
                {item.icon}
                </div>
                <div className="mt-4 text-capitalize">
                        {item.title}
                    </div>
                <div className="mt-3">
                        {item.text}
                </div>
                </div>
                    )
                })}
                </div>
                </div>
            </ServicesWrapper>
        )
    }
}
const ServicesWrapper=styled.div`
background:rgba(95,183,234,0.5);
    .service-icon{
        font-size:2.5rem;
        color:var(--primaryColor);

    }
    p{
        color:var(--darkGrey);
    }
`
