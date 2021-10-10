import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Gallery from './Gallery'
import Menu from './Menu'
import Navbar from './Navbar'
import Section from './Section'
import SlideCarousel from './SlideCarousel'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <SlideCarousel />
            <Section />
            <About />
            <Menu />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage
