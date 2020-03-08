import React from 'react'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'
import Info from '../components/aboutInfo/Info'

export default function About() {
    return (
        <>
        <Hero img={aboutBcg}/>
        <Info/>
        </>
    );
}