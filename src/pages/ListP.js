import React from "react";
import "./ListP.css"
import data from "../Data/ServiceData"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function ListP() {
  return (
      <div>
    <Navbar />      
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">

             {data.map((product)=>{
                return(
                    <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0">

                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">

                    <div className="icon"> {product.logo} </div>
                    <h4 className="title">
                        <a href=""> {product.title} </a>
                    </h4>
                    <p className="description">
                        {product.desc}
                    </p>
                    
                     </div> 
                     </div>

                )
             })}
              
             
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default ListP;
