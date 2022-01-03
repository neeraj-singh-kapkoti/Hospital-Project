import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/ServiceP/SingleP.css";
import { useLocation } from "react-router-dom";
import SinglePage from "../../components/SinglePage/SinglePage";

function SingleP() {
  const location = useLocation();
  const { logo, type, desc} = location.state;
  return (
    <div>
      <Navbar />
      <section id="singlePage" className="singlePage sec-top">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <section id="home" style={{backgroundImage: `url(${logo})`, width: "100%", height: "75vh"}} className="d-flex align-items-center">
              <div className="container" style={{backgroundColor: "var(--brown)"}}>
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
    
     <SinglePage item = {location.state} />
      <Footer />
    </div>
  );
}

export default SingleP;
