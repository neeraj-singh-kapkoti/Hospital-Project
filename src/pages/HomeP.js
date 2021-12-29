import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CarouselContainer from '../components/CarouselContainer/CarouselContainer'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import AboutCount from '../components/AboutCount/AboutCount'
import MoreService from '../components/MoreService/MoreService'
import Doctor from '../components/Doctor/Doctor'
import Bodyparts from '../components/Bodyparts/Bodyparts'


function HomeP() {
    return (
        <div>
            <Navbar />
            <CarouselContainer />
            <Services />
            <Bodyparts />
            <Doctor />
            <About />
            {/* <AboutCount /> */}
            <Footer />
        </div>
    )
}

export default HomeP
