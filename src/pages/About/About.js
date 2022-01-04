import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Carousel } from 'react-bootstrap';
import image1 from '../../image/about/IMG_0590_edited.jpg';
import image2 from '../../image/about/IMG_0584_edited.jpg';
import image3 from '../../image/about/IMG_0596_edited.jpg';
import image4 from '../../image/about/IMG_0603_edited.jpg';
import image5 from '../../image/about/IMG_0610_edited.jpg';
import Scroll from "../../components/Scroll/Scroll"


function About() {
  return (
    <div className="container" style={{marginTop:"9rem"}}>
      <Scroll showBelow={250} />
      <Navbar />

      <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
         width={1600} height={200} 
          className="d-inline-block img-fluid "
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
         
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1600} height={200} 
          className="d-inline-block img-fluid "
          src={image1}
          alt="Third slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
        width={1600} height={200} 
          className="d-inline-block img-fluid "
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
        width={1600} height={200} 
          className="d-inline-block img-fluid "
          src={image5}
          alt="Third slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
        width={1600} height={200} 
          className="d-inline-block img-fluid "
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      <section className="about" id="about">
        <div className="content">
          <p className="new-line">
            <h1>General Information</h1>
            <p>
              B.D.PANDEY Hospital is the prestigious and largest Hospital of
              Govt in Pithoragahrh with 1000 beds capacity.
              <br />
              It is a teaching hospital associated with the University College
              of Medical Science,, therefore, also serves as a <br />
              training center for undergraduate and post-graduate medical
              students. The hospital is providing health care facilities
              <br />
              to the needy population of Pithoragarh district and adjoining an
              average daily OPD attendance of about 4000 patients.
              <br />
            </p>
            <h3>The hospital is equipped with :</h3>
            <p>
              1. Round the clock emergency service in common clinical servics.
              <br />
              2. Neurosurgery facilities for road side accident and other trauma
              victims.
              <br />
              3. Bum care facilities.
              <br />
              4. Thallesemia day care center.
              <br />
              4. CT-Scan Hemo -dialysis and Peritoneal dialysis.
              <br />
              <br />
              <br />
            </p>
            <p>
              The hospital is in the process of computerization. OPD and IPD
              registration, Blood Sample collection centers. Admission <br />
              and Enquiry, Lab investigation services and Medical Record Data
              have already been computerized and integrated
              <br />
              through LAN.
            </p>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
