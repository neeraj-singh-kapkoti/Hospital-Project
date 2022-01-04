import React, { useState,useEffect } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import Popup from "../../pages/pops/pops1";
import logoback from "../../image/logo/logoImage1.png"
import logo from "../../image/logo/logo.png"
import {Link} from "react-router-dom"

function Navbar(props) {
  let location = useLocation();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const ActiveClr = (curr) => {
    if (location.pathname === curr) {
      return "active";
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []); 

  return (
    <div>

<div id="topbar" className={`d-flex align-items-center fixed-top ${scroll ? "topbar-scrolled" : ""}`}>

        <img src={logoback} />
     
  </div>

      <header id="header" className={`fixed-top ${scroll ? "header-scrolled" : ""}`}>
        <Link to="/" className="logo">
            <img src={logo} />
         </Link>

        <nav className={click ? "navbar active" : "navbar"}>
       <Link className={ActiveClr("/")} to="/" onClick={handleClick}>
            Home
          </Link>
        
          <Link
            to="/service"
            className={ActiveClr("/service")}
            onClick={handleClick}
          >
            Treatment
          </Link>
          <Link
            to="/others"
            className={ActiveClr("/others")}
            onClick={handleClick}
          >
            Services
          </Link>
          <Link to="/test" className={ActiveClr("/test")} onClick={handleClick}>
            Types of test
          </Link>
          <Link
            to="/counselling"
            className={ActiveClr("/counselling")}
            onClick={handleClick}
          >
            Counselling
          </Link>
          <Link
            to="/govt"
            className={ActiveClr("/govt")}
            onClick={handleClick}
          >
            Govt. Schemes
          </Link>
          <Link
            to="/about"
            className={ActiveClr("/about")}
            onClick={handleClick}
          >
            About us
          </Link>
        </nav>

        <div className="icons">
          <ul>
            <li>
              {" "}
              <a href="">Emergency</a>
              <ul>
                <li>
                  <a onClick={togglePopup}>service</a>
                </li>
                <li>
                  <a onClick={togglePopup}>blood bank</a>
                </li>
                <li>
                  <a onClick={togglePopup}>Ambulance</a>
                </li>
              </ul>
            </li>
            <li>
              <i
                onClick={handleClick}
                className={click ? "fas fa-times" : "fas fa-bars"}
                id="menu-bars"
              >
                {" "}
              </i>
            </li>
          </ul>
        </div>
        <div></div>
        {isOpen && (
          <Popup
            content={
              <>
                <b>Design your Popup</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>Test button</button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </header>
    </div>
  );
}

export default Navbar;
