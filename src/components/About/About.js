import React from "react";
import "./about.css"

function About() {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-5 col-lg-6 video-box d-flex justify-content-center
     align-items-stretch position-relative"
            >
              <a
                href="https://youtu.be/h39m-e8JHDc"
                class="glightbox play-btn mb-4"
              ></a>
            </div>

            <div
              class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch
     justify-content-center py-5 px-lg-5"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-heart"></i>
                </div>
                <h4 class="title">
                  <a href="">HEALTH IS WEALTH</a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-health"></i>
                </div>
                <h4 class="title">
                  <a href="">EMERGENCY</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-help-circle"></i>
                </div>
                <h4 class="title">
                  <a href="">SERVICES </a>
                </h4>
                <p class="description">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
