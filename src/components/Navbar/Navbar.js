import React, { useState } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";


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

  return (
    <div>
   <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>Health-Care
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
          <i className="fas fa-search" id="search-icon"></i>
          <a href="#" >Emergency</a>
          <i onClick={handleClick} className={click ? "fas fa-times" : "fas fa-bars"} id="menu-bars"> </i>          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
