import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../ServiceP/singleP.css";
import "../../components/SinglePage/singlePage.css";
import { useLocation } from "react-router-dom";

function CouncillingP() {
  const location = useLocation();
  const { logo,img, name, edu, prof, room, type, desc, details, details1} = location.state;
  return (
    <div>
      <Navbar />
      <section id="singlePage" className="singlePage">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h1 className="heading">
              {" "}
              our <span>services</span>{" "}
            </h1>
            <h2>{type}</h2>
            <section id="home" style={{backgroundImage: `url(${logo})`, width: "100%", height: "70vh"}} className="d-flex align-items-center">
              <div className="container">
                <h1>
                  {type}
                </h1>
                <h2>
                  {desc}
                </h2>
              </div>
            </section>
          </div>
        </div>
      </section>
    
      <section className="category">
        <h1 className="heading">About Doc</h1>

        <div className="box-container">
          <div className="box">
            <img src={img} alt="" />
          </div>
          
          <div className="box2">
            <h1>Name : {name}</h1>
            <h1>Education : {edu}</h1>
            <h1>Profetion : {prof}</h1>
            <h1>Room NO : {room}</h1>
            
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="image">
          <img src={logo} alt="" />
        </div>

        <div className="content">
          <h3>What is {type} ?</h3>
          <p className="new-line">
            {details}
          </p>
        </div>
          <p className="new-line">
            {details1}
          </p>
      </section>
      <Footer />
    </div>
  );
}

export default CouncillingP;