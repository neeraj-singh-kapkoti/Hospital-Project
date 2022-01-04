import React from "react";
import "./Doctor.css";
import img from "../../image/drNew.png";
import {Link} from "react-router-dom"


function Doctor() {
  return (
    <div className="container">
      <section className="doctors" id="doctors">
        <h1 className="heading">
          {" "}
          our <span>doctors</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img} alt="" />
            <h4>S S BORA</h4>
            <h5>GENERAL SURGEAN</h5>
            <h5>MBBS</h5>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>S S BORA</h4>
            <h5>GENERAL SURGEAN</h5>
            <h5>MBBS</h5>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>S S BORA</h4>
            <h5>GENERAL SURGEAN</h5>
            <h5>MBBS</h5>
          </div>
          
          <div className="box">
            <img src={img} alt="" />
            <h4>S S BORA</h4>
            <h5>GENERAL SURGEAN</h5>
            <h5>MBBS</h5>
          </div>
        </div>
        <Link to="/DoctorList" className="btn-get-started scrollto">
            More
          </Link>
      </section>
    </div>
  );
}

export default Doctor;
