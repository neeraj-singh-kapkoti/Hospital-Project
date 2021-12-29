import { brown } from '@material-ui/core/colors';
import React from 'react';
import { Carousel } from 'react-bootstrap';

import image2 from '../../image/doc.jpg';
import image3 from '../../image/main.jpg';

const CarouselContainer = () => {
  return (
    <div className='container'>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
         width={1600} height={500} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1600} height={500} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1600} height={500} 
          className="d-inline-block img-fluid "
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="pic-box" style={{backgroundColor: "var(--brown)"}} >
             <h1 className="text-success">First slide label</h1>
             <p className="display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;