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
          <i className="fas fa-utensils"></i>resto.
        </a>

        <nav className={click ? "navbar active" : "navbar"} >
          <a className={ActiveClr("/")} href="/" onClick={handleClick}>
            home
          </a>
          <a href="/Treatment" className={ActiveClr("/treatment")} onClick={handleClick} >Treatment services</a>
          <a href="/other" className={ActiveClr("/other")} onClick={handleClick} >Other services</a>
          <a href="test_type" className={ActiveClr("/test_type")} onClick={handleClick} >Type of test</a>
          <a href="counselling" className={ActiveClr("/counselling")} onClick={handleClick} >counselling</a>
          <a href="about" className={ActiveClr("/about")} onClick={handleClick} >about</a>
        
        </nav>


        <div className="icons">
          <i onClick={handleClick} className={click ? "fas fa-times" : "fas fa-bars"} id="menu-bars"> </i>        
          <i className="fas fa-search" id="search-icon"></i>
          <a href="#" >Emergency</a>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
