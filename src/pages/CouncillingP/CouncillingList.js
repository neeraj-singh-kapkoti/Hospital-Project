import React from "react";
import "../ServiceP/ServicesList.css";
import data from "../../Data/Councilling";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function CouncillingList() {
  return (
    <div>
      <Navbar />
      <section className="packages container" id="packages">
        <h1 className="heading">Counselling</h1>

        <div className="box-container">
          {data.map((product) => {
            return (
              <Link
                to="/councillingP"
                key={product.title}
                state={{
                  logo:product.logo,
                  img: product.doc_img,
                  details: product.DETAILS,
                  details1: product.DETAILS1,
                  type: product.title,
                  name: product.docName,
                  prof: product.docProf,
                  edu: product.docEduc,
                  room: product.roomNo,
                  desc: product.desc
                }}
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

export default CouncillingList;
