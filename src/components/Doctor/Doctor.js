import React from "react";
import "./Doctor.css";
import img from "../../image/doc.jpg"

function Doctor() {
  return (
    <div>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Rozan Chitrakar</h4>
                  <span>Chief Medical Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                        <h4>Shift timing </h4>
                        <h5>5 to 8</h5> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Pratikshya Rai</h4>
                  <span>Anesthesiologist</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                  <h4>Shift timing </h4>
                        <h5>5 to 8</h5> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Bratt Watson</h4>
                  <span>Cardiology</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                  <h4>Shift timing </h4>
                        <h5>5 to 8</h5> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Lauren Jones</h4>
                  <span>Neurosurgeon</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
                  <h4>Shift timing </h4>
                        <h5>5 to 8</h5> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctor;
