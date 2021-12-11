import React from "react";
import { AiFillFacebook} from "react-icons/ai";
import "./footer.css"

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>PR-CARE</h3>
                  <p>
                    KIST Hospital Road<br />44700 KTM, NEPAL<br />
                    <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> prcare@example.com
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://www.facebook.com/groups/577400563258704"
                      className="facebook"
                    >
                      <AiFillFacebook className="ico"/>
                    </a>
                    <a href="#" className="instagram">
                        <AiFillFacebook className="ico"/>  </a>
                    <a href="#" className="twitter">
                        <AiFillFacebook className="ico"/>  </a>
                    <a href="#" className="google-plus">
                        <AiFillFacebook className="ico"/>  </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <AiFillFacebook className="ico"/> <a href="#">Home</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#doctor">Doctors</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#">Extra Web Course</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#">Navbar Tutorial</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <AiFillFacebook className="ico"/>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>PR-CARE</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://www.youtube.com/channel/UCc5GjlNTdSV4ZZCsX61mccg">
              Kapkoti herooo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
