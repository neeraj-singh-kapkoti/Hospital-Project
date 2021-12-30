import React from "react";
import "./Lists.css";
import pic3 from "../../image/treatment/Dental-Care.jpg"
import pic4 from "../../image/treatment/Ent.jpg"
import pic5 from "../../image/treatment/eye.jpg"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Lists() {

    const data = [
        {
            logo: pic3,
            link: "Test",
            title: "WARD",
            desc: "The hospital has 16 bedded, special wards Patients can either take full room or single sharing bed according to their convenience."
        },
        {
          logo: pic4,
          link: "Test2",
          title: "Registration fee in hospital",
          desc: "Medicines prescribed by CGHS doctors/specialists, which are available in Wellness Center are supplied immediately."
      },
        {
            logo: pic5,
            link: "Test2",
            title: "vaccine available",
            desc: "1. BCG (Bacillus Calmette Guerin) 2. DPT (Diphtheria, Pertussis and Tetanus Toxoid) 3. OPV (Oral Polio Vaccine)"
        }
    ]    

  return (
    <div>
      <Navbar />
      <section className="packages container" id="packages">
        <h1 className="heading">Other Services</h1>

        <div className="box-container">
          {data.map((product) => {
            return (
              <Link
                to={product.link}
                key={product.title}
              >
                <div className="box">
                  <div className="image">
                    <img src={product.logo} alt="" />
                  </div>
                  <div className="content">
                    <h3>{product.title}</h3>
                    <div className="price">{product.desc}</div>
                    
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Lists;