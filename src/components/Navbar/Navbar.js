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
          <a href="#dishes" className={ActiveClr("/service")} onClick={handleClick} >dishes</a>
          <a href="#about" className={ActiveClr("/service")} onClick={handleClick} >about</a>
          <a href="/service" className={ActiveClr("/service")} onClick={handleClick} >menu</a>
          <a href="#review" className={ActiveClr("/service")} onClick={handleClick} >review</a>
          <a href="#order" className={ActiveClr("/service")} onClick={handleClick} >order</a>
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
