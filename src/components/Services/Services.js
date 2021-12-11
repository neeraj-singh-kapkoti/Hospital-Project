import React from 'react'
import "./Services.css"
import { BsEyeFill } from "react-icons/bs";

function Services() {
    return (
        <div>
            
    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><BsEyeFill />   </div>
              <h4 class="title"><a href=""> Normal checkup</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti 2 times per month quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><BsEyeFill />  </div>
              <h4 class="title"><a href="">Blood Test</a></h4>
              <p class="description">At vero eos et accusamus et 1 week odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><BsEyeFill />  </div>
              <h4 class="title"><a href="">Body temperature</a></h4>
              <p class="description">Excepteur sint occaecat 37.6 non proident, 98.6 sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><BsEyeFill /> </div>
              <h4 class="title"><a href="">Medicine use</a></h4>
              <p class="description">Duis aute dolor 10-12 in reprehenderit in voluptate 8-12 velit esse cillum dolore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

export default Services
