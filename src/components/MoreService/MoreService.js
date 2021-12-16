import React from 'react'
import "./MoreService.css"
import { BsCalendarCheckFill} from "react-icons/bs";
import { AiFillMedicineBox} from "react-icons/ai";
import { MdHealthAndSafety,MdLocalPharmacy} from "react-icons/md";
import { FaWheelchair} from "react-icons/fa";
import { GiHypodermicTest} from "react-icons/gi";


function MoreService() {
  return (
    <div>
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <BsCalendarCheckFill style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Regular Checkup</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <AiFillMedicineBox style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Medicine</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <   MdLocalPharmacy  style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Pharmeologist</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <   GiHypodermicTest  style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Blood Test</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <   FaWheelchair    style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Disabled Person</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <MdHealthAndSafety style={{ fontSize: 100 }}/>
              <h4><a href=""style={{ textDecoration: 'none' }}>Health Post</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
        </div>
          <a href="#about" className="btn-get-started scrollto">
             More service
          </a>
      </div>
      </section>
    </div>
  );
}

export default MoreService;
