import React from "react";
import "./TestList.css";
import data from "../../Data/Tests";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function TestList() {
  return (
    <div>
      <Navbar />
      <section className="packages container" id="packages">
        <h1 className="heading">tests</h1>

        <div className="box-container">
          {data.map((product) => {
            return (
              <Link
                to={product.path}
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

export default TestList;
