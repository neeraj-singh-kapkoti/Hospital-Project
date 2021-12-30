import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Test1.css";
import path from "../../image/path.jpg"

function Test1() {
  return (
    <div>
      <Navbar />
      <section id="singlePage" className="singlePage">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h1 className="heading">
              {" "}
              Pathological tests in <span>Hospital</span>{" "}
            </h1>
          </div>
            
            <h2>What are pathology tests?</h2>
            <br />
            <p>
              A pathology test is a test that examines samples of your body's
              tissues, including your blood, urine, faeces (poo), samples obtained
              by
              <br /> biopsy. Doctors use this information for diagnosis and
              treatment of diseases and other conditions.
            </p>
            <h2>Why are pathology tests important?</h2>
            <br />
            <p>
              {" "}
              Pathology tests help doctors and nurses prevent, diagnose, manage
              and monitor many conditions, including allergies, infections,
              chronic
              <br /> diseases and cancer
            </p>
            <h2>Before your test:</h2>
            <br />
            <p>
              {" "}
              Follow any instructions given to you about the test. For some tests,
              you need special preparation such as fasting. Let collection centre
              staf
              <br /> know if you have not followed the instructions for any
              reason.
              <br /> Let your doctor know about any medications
              <br /> you are taking, including herbal or over-the-counter
              (non-prescription) medications.
              <br /> If you have other questions about the tests, or are jot sure
              of what you need to do, it is best to check with your doctor or call
              the <br /> pathology collection centre.
              <br /> For more information click on this link{" "}
              <a href="https://www.healthdirect.gov.au/understanding-pathology-tests"></a>{" "}
              <br />
            </p>
            <h1 style={{backgroundColor:"powderblue"}}>
              Available test and there cost
            </h1>
            <img src={path} alt="table"/>
          </div>
      </section>
      <Footer />
    </div>
  );
}

export default Test1;
