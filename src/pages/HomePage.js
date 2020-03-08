import React from 'react'
import { ProductConsumer } from "../context"
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';

export default function Home() {
    return(
        <>
  <Hero max="true" title="Start shopping ...!" >
      <Link className="main-link" to="/products"
      style={{margin:"2rem"}} >Our Products</Link>
  </Hero>
  <Services/>
  <Featured/>
      </>
  );
}
