import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <section className="py-5">
        <div className="container">
            <Title title='about us' center="true"  />
            <div className="row">

                <div className="col-10 mx-auto col-md-6 my-3">
                <img src={aboutBcg} className="img-fluid img-thumbnail" 
                style={{background:'var(--darkGrey'}} />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                <p className="text-muted text-lead my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, blanditiis voluptatum repellat error hic nemo praesentium reprehenderit laudantium assumenda consequuntur?
                </p>
                <p className="text-muted text-lead my-3" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, blanditiis voluptatum repellat error hic nemo praesentium reprehenderit laudantium assumenda consequuntur?
                </p>
                <button className="main-link " type="button"
                style={{marginTop:"2rem"}}>
                 More Info</button>
                </div>  
            </div>
        </div>
        </section>

    )
}
