import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Test2.css";
import img from "../../image/1.jpg";
import doc from "../../image/doc.jpg";

function Test2() {
  return (
    <div>
      <Navbar />

      <section id="singlePage" className="singlePage">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <section
              id="home"
              style={{
                backgroundImage: `url(${img})`,
                width: "100%",
                height: "100vh",
              }}
              className="d-flex align-items-center"
            >
              <div
                className="container"
                style={{ backgroundColor: "var(--brown)" }}
              >
                <h1>Ultrasound Test</h1>
                <h2>
                  An ultrasound can also show parts of the body in motion, such
                  as a heart beating or blood flowing through blood vessels.
                </h2>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="category">
        <h1 className="heading">About Doc</h1>

        <div className="box-container">
          <div className="box">
            <img src={doc} alt="" />
          </div>
          <div className="box2">
              <h1>Name : s s bora</h1>
              <h1>Education : MBBS</h1>
              <h1>Profetion : GENERAL SURGEAN</h1>
              <h1>Room NO : 15</h1>
            </div>
          </div>
        </section>

        <section className="about" id="about">
        <h1 style={{ color: "green" }}>
          what are the rules before ultersound ?
        </h1>
        <p>
          <b>Empty your bladder 90 minutes before exam time,</b> then consume
          one 8-ounce glasses of fluid (water, milk, coffee, etc.) about
          <br /> an hour before exam time. We recommend a two-piece outfit so we
          can access your
          <br /> abdomen without you removing your clothing. You may eat
          normally prior to having a fetal ultrasound.{" "}
        </p>
        <p>
          <h2>What is an ultrasound?</h2>
          <br /> An ultrasound is an imaging test that uses sound waves to
          create a picture (also known as a sonogram) of <br />
          organs, tissues, and other structures inside the body. Unlike x-rays,
          ultrasounds don't use any radiation. An
          <br /> ultrasound can also show parts of the body in motion, such as a
          heart beating or blood flowing through
          <br /> blood vessels.{" "}
        </p>
        <p>
          <h2>There are two main categories of ultrasounds :</h2>
          <br />
          <h2> Pregnancy ultrasound</h2> is used to look at an unborn baby. The
          test can provide information about a baby's <br />
          growth, development, and overall health.
          <br />
          <h2> Diagnostic ultrasound</h2> is used to view and provide
          information about other internal parts of the body. These include the
          heart, blood vessels, liver, bladder, kidneys, and female reproductive
          organs. For more information click on this link
          <a href="https://medlineplus.gov/lab-tests/sonogram/">
            {" "}
            https://medlineplus.gov/lab-tests/sonogram/
          </a>
        </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Test2;
