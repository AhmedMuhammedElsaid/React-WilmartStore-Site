import React from 'react'
import {Link} from 'react-router-dom'
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero'
export default function Default() {
    return(
        <>
        <Hero img={defaultBcg} title="404 " max="true">
        <h1 className="text-uppercase">Page Not found</h1>
        <Link to="/" style={{marginTop:"2rem"}} className="main-link">return home   </Link>
        </Hero>
        </>
    );
}