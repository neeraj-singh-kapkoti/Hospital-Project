import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import AboutCount from '../components/AboutCount/AboutCount'
import MoreService from '../components/MoreService/MoreService'
import Doctor from '../components/Doctor/Doctor'


function HomeP() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <MoreService />
            <Doctor />
            <About />
            <AboutCount />
            <Footer />
        </div>
    )
}

export default HomeP
