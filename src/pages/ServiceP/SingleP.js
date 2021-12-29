import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./singleP.css";
import { useLocation } from "react-router-dom";
import SinglePage from "../../components/SinglePage/SinglePage";

function SingleP() {
  const location = useLocation();
  const { logo, type, desc} = location.state;
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
    
     <SinglePage item = {location.state} />
      <Footer />
    </div>
  );
}

export default SingleP;
