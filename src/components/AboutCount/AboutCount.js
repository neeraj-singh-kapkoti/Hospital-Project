import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import "./AboutCount.css"
import {Link} from "react-router-dom"
import pic1 from "../../image/treatment/Bmt.jpg"
import pic3 from "../../image/treatment/Dental-Care.jpg"
import pic4 from "../../image/treatment/Ent.jpg"
import pic5 from "../../image/treatment/eye.jpg"
import pic6 from "../../image/treatment/Header_Pediatric-Surgery.jpg"
import pic7 from "../../image/treatment/orthopadic.jpg"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const hotelCards = [
    {
      imageSrc:pic1,
      title: 'Sexually transmitted diseases',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:pic7,
      title: 'heart attack',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:pic3,
      title: 'common cold',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
        imageSrc:pic4,
        title: 'Typhoid fever ',
    },
    {
      imageSrc:pic5,
      title: 'Dengue ',
  },
  {
    imageSrc:pic6,
    title: 'Influenza ',
},

  ]

  return (
    <div className="container">
    <section style={{backgroundColor:"var(--blue)"}}>
    <h1 className="heading">
           Some Common Diseases 
        </h1>
    <div className='content-crousel'>
      {/* <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div> */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='card'>
            <img src={card.imageSrc} alt={card.title} className='card-image' />
            <Link to="/test/test1" ><button>{card.title}</button></Link>
          </div>
        ))}
      </Slider>
    </div>
    </section>
    </div>
  )
}