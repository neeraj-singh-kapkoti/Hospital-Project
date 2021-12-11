import React from 'react'
import "./Services.css"
import { FaUserMd} from "react-icons/fa";

function Services() {
    return (
        <div>
            
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><FaUserMd size={70}/> </div>
              <h4 className="title"><a href=""> Normal checkup</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti 2 times per month quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><FaUserMd size={70}/>  </div>
              <h4 className="title"><a href="">Blood Test</a></h4>
              <p className="description">At vero eos et accusamus et 1 week odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><FaUserMd size={70}/>  </div>
              <h4 className="title"><a href="">Body temperature</a></h4>
              <p className="description">Excepteur sint occaecat 37.6 non proident, 98.6 sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><FaUserMd size={70}/> </div>
              <h4 className="title"><a href="">Medicine use</a></h4>
              <p className="description">Duis aute dolor 10-12 in reprehenderit in voluptate 8-12 velit esse cillum dolore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Services
