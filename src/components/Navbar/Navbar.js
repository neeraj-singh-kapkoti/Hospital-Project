import React from "react";
import "./navbar.css"
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";


function Navbar() {
  return (
    <div>
      <div className="topbar d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <AiFillMail className="ico" />  {" "}
            <a href="mailto:contact@example.com">hospital@example.com</a>
            <AiFillPhone className="ico" /> +1 5567 23453 21
          </div>
          {/* <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="ico">
              <AiOutlineSearch />
            </a>
            <a href="#" className="ico">
              <GrLanguage />
            </a>
          </div> */}
        </div>
      </div>

      <header className="header fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Pithoragarh - healthcare</a>
          </h1>

          <nav className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#doctors">
                  Doctors
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <VscThreeBars className="ico mobile-nav-toggle" />
          </nav>

          <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>

    </div>
  );
}

export default Navbar;
