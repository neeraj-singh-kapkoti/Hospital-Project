import React, { useState } from "react";
import "./navbar.css";


function Navbar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)

  };

  return (
    <div>
   <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>resto.
        </a>

        <nav className={click ? "navbar active" : "navbar"} >
          <a className="active" href="#home">
            home
          </a>
          <a href="#dishes">dishes</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
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
