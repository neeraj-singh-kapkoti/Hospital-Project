import React from 'react'
import "./AboutCount.css"
import { FaApple} from "react-icons/fa";

function AboutCount() {
    return (
        <div>
             <section id="counts" className="counts">
    <div className="container" data-aos="fade-up">

      <div className="row no-gutters">

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
               <FaApple size={70} />
            <span className="purecounter">50</span>
            <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
            <a href="#">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <FaApple size={70} />
            <span className="purecounter">50</span>         
            <p><strong>Departments</strong> adipisci atque cum aut numquam delectus</p>
            <a href="#">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <FaApple size={70} />
            <span className="purecounter">50</span>
            <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
            <a href="#">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
                <FaApple size={70} />
                <span className="purecounter">50</span>            
                <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
            <a href="#">Find out more &raquo;</a>
          </div>
        </div>

      </div>

    </div>
  </section>
        </div>
    )
}

export default AboutCount
