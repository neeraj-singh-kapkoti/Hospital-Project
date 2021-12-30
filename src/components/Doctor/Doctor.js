import React from "react";
import "./Doctor.css";
import img from "../../image/doc.jpg";

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
            <h3>john deo</h3>
            <span>expert doctor</span>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
          </div>
          
          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
          </div>
        </div>
        <a href="/DoctorList" className="btn-get-started scrollto">
            More
          </a>
      </section>
    </div>
  );
}

export default Doctor;
