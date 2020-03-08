import React from 'react';
import contactBcg from '../images/contactBcg.jpeg'
import Contact from '../components/ContactPage/Contact';
import Hero from '../components/Hero';

export default function ContactPage() {
    return (
        <>
        <Hero img={contactBcg}/>
          <Contact/>
        </>
    )
}