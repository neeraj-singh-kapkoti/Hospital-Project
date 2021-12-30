import React, { useState } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import Popup from '../../pages/pops/pops1';
import { MdHealthAndSafety } from "react-icons/md";




function Navbar(props) {
  let location = useLocation();

  const [click, setClick] = useState(false);
  
  const handleClick = () => {
    setClick(!click)
  };

  const ActiveClr = (curr)=>{
    if(location.pathname===curr){
      return "active"
    }
  }

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
   <header>
        <a href="/" className="logo">
           <MdHealthAndSafety style={{fontSize: 50}} /> BD-Pandey
        </a>

        <nav className={click ? "navbar active" : "navbar"} >
          <a className={ActiveClr("/")} href="/" onClick={handleClick}>
            home
          </a>
          <a href="/service" className={ActiveClr("/service")} onClick={handleClick} >Treatment & services </a>
          <a href="/others" className={ActiveClr("/others")} onClick={handleClick} >Others</a>
          <a href="/test" className={ActiveClr("/test")} onClick={handleClick} >Types of test</a>
          <a href="/counselling" className={ActiveClr("/counselling")} onClick={handleClick} >Counselling</a>
          <a href="/about" className={ActiveClr("/about")} onClick={handleClick} >About us</a>
        </nav>


        <div className="icons">
          
          <ul>
            <li> <a href="" >Emergency</a>
                <ul>
                  <li><a onClick={togglePopup} >service</a></li>
                  <li><a onClick={togglePopup} >blood bank</a></li>
                  <li><a onClick={togglePopup} >Ambulance</a></li>
                </ul>
            </li>
            <li><i onClick={handleClick} className={click ? "fas fa-times" : "fas fa-bars"} id="menu-bars"> </i>          
</li>
          </ul>
         
        </div>
        <div>

    
  </div>
  {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
      </header>
    </div>
  );
}

export default Navbar;
