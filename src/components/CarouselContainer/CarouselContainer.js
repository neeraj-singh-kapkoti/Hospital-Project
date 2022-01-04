import React from 'react';
import { Carousel } from 'react-bootstrap';
import image2 from '../../image/home/covid-19-landing-page-desktop.jpg';
import image3 from '../../image/home/FORTIS_SAVE-THE-SAVIOUR_DesktopBanner_new_1_17-June.jpg';
import {Link} from "react-router-dom"

const CarouselContainer = () => {
  return (
    <div className='container' style={{marginTop:"8rem"}}>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <Link to="/Ask">
        <img
         width={1600} height={300} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="First slide"
        />
        </Link>
        <Carousel.Caption>
        
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <img
        width={1600} height={300} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <img
        width={1600} height={300} 
          className="d-inline-block img-fluid "
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;