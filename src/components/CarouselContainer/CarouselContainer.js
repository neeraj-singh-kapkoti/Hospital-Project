import React from 'react';
import { Carousel } from 'react-bootstrap';
import image2 from '../../image/home/covid-19-landing-page-desktop.jpg';
import image3 from '../../image/home/FORTIS_SAVE-THE-SAVIOUR_DesktopBanner_new_1_17-June.jpg';

const CarouselContainer = () => {
  return (
    <div className='container'>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
         width={1600} height={300} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div> */}
         
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
        {/* <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div> */}
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
        {/* <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;