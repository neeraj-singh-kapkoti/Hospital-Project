import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CarouselContainer from '../components/CarouselContainer/CarouselContainer'
import About from '../components/About/About'
import AboutCount from '../components/AboutCount/AboutCount'
import Doctor from '../components/Doctor/Doctor'
import Bodyparts from '../components/Bodyparts/Bodyparts'
import Scroll from "../components/Scroll/Scroll"


function HomeP() {
    return (
        <div>
            <Scroll showBelow={250} />
            <Navbar />
            <CarouselContainer />
            <Bodyparts />
            <Doctor />
            <AboutCount />
            <About />
            <Footer />
        </div>
    )
}

export default HomeP
