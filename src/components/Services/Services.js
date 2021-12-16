import React from "react";
import "./Services.css";
import { BsCardChecklist } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

function Services() {
  return (
    <div>
      <section id="featured-services" class="featured-services">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <BsCardChecklist style={{ fontSize: 100 }} />
                <h4 class="title">
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    Normal checkup
                  </a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti 2 times per month quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <MdBloodtype />
                <MdBloodtype style={{ fontSize: 100 }} />

                <h4 class="title">
                  <a href="" style={{ textDecoration: "none" }}>
                    Blood Test
                  </a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et 1 week odio dignissimos ducimus
                  qui blanditiis
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <FaTemperatureLow />
                <FaTemperatureLow style={{ fontSize: 100 }} />
                <h4 class="title">
                  <a href="" style={{ textDecoration: "none" }}>
                    Body temperature
                  </a>
                </h4>
                <p class="description">
                  Excepteur sint occaecat 37.6 non proident, 98.6 sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <GiMedicines />

                <GiMedicines style={{ fontSize: 100 }} />
                <h4 class="title">
                  <a href="" style={{ textDecoration: "none" }}>
                    Medicine use
                  </a>
                </h4>
                <p class="description">
                  Duis aute dolor 10-12 in reprehenderit in voluptate 8-12 velit
                  esse cillum dolore
                </p>
              </div>
            </div>
          </div>
          <a href="/service" className="btn-get-started scrollto">
            More
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
