import React from "react";
import "./about.css";
import img from "../../image/drNew.png";
import dm from "../../image/head/dm.jpeg"


function About() {
  return (
    <div className="container">
      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          Message from Administrator
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={dm} alt="" />
            <h4>Dr. Ashish Chauhan</h4>
            <h5>District Magistrate of Pithoragarh, Uttarakhand</h5>
            <p className="text">
              "Physicians do a lot for a patient when they give his disease a name"
            </p>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>Dr. H S Hyanki</h4>
            <h5>CMO of Pithoragarh, Uttarakhand</h5>
            <p className="text">
              "All doctors treat, but a good doctor lets nature heal."
            </p>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>Dr. K C Bhatt</h4>
            <h5>PMO of Pithoragarh, Uttarakhand</h5>
            <p className="text">
              "Physicians do a lot for a patient when they give his disease a name"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
