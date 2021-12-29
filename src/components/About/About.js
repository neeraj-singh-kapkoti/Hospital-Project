import React from "react";
import "./about.css";
import img from "../../image/doc.jpg";

function About() {
  return (
    <div className="container">
      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          head <span>review</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <h4>District Manager</h4>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
            </p>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <h4>District Manager</h4>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
            </p>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <h4>District Manager</h4>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
