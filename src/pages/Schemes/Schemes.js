import React from "react";
import "../../pages/OtherP/Lists.css";
import pic3 from "../../image/govt/WhatsApp Image 2022-01-04 at 2.33.50 PM (1).jpeg"
import pic4 from "../../image/govt/WhatsApp Image 2022-01-04 at 2.33.50 PM.jpeg"
import pic5 from "../../image/govt/WhatsApp Image 2022-01-04 at 2.33.51 PM.jpeg"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Schemes() {

    const data = [
        {
            logo: pic5,
            link: "Test",
            title: "Employment State Insurance Scheme",
            desc: "The Pradhan Mantri Surakshit Matritva Abhiyan has been launched by the Ministry of Health & Family Welfare (MoHFW)"
        },
        {
          logo: pic3,
          link: "Test2",
          title: "Ayushman Bharat Yojana",
          desc: "The Pradhan Mantri Surakshit Matritva Abhiyan has been launched by the Ministry of Health & Family Welfare (MoHFW)"
      },
        {
            logo: pic4,
            link: "Test2",
            title: "Pradhan Mantri Suraksha Bima Yojana",
            desc: "The Pradhan Mantri Surakshit Matritva Abhiyan has been launched by the Ministry of Health & Family Welfare (MoHFW)"
        }
    ]    

  return (
    <div>
      <Navbar />
      <section className="packages container" id="packages">
        <h1 className="heading headingPage">Govt. Schemes for Health</h1>

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

export default Schemes;