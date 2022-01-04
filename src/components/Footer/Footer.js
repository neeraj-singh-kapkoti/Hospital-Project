import React from "react";
import { IoIosArrowDroprightCircle} from "react-icons/io";
import "./footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer footer-top">
          <div className="container">
            <div className="foot-box">
              <div className="size-foot">
                <div className="footer-info">
                  <h3>B.D. Pandey District <br />  Hospital, Pithoragarh</h3>
                  <p>
                  Mahatma Gandhi Marg, Pithoragarh, Uttarakhand 262501 <br /> Pithoragarh, Uttarakhand, India 262501<br />
                    <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> prcare@example.com
                  </p>
                  
                </div>
              </div>

              <div className="size-foot footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/> <a href="/">Home</a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a href="/service">Treatment & services</a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a href="/others"> Others</a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a href="/DoctorList">Doctors</a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a href="/test">Types of test</a>
                  </li>
                </ul>
              </div>

              <div className="size-foot footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a ><Link to="/">General Sergery</Link></a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a ><Link to="/">General Sergery</Link></a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a ><Link to="/">General Sergery</Link></a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a ><Link to="/">General Sergery</Link></a>
                  </li>
                  <li>
                    <IoIosArrowDroprightCircle className="ico"/>{" "}
                    <a ><Link to="/">General Sergery</Link></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>B.D. Pandey District Hospital, Pithoragarh</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="">
              SIT Student
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
