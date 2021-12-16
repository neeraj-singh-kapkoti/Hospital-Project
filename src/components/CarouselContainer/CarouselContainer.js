import React from 'react';
import { Carousel } from 'react-bootstrap';

import image2 from '../../image/doc.jpg';
import image3 from '../../image/main.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
         width={1500} height={500} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-success display-1">First slide label</h1>
          <p className="display-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1500} height={500} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="text-success display-1">Second slide label</h1>
          <p className="display-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1500} height={500} 
          className="d-inline-block img-fluid "
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="text-success display-1">Third slide label</h1>
          <p className="display-1">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;