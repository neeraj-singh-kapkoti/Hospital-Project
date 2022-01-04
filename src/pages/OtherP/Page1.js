import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./page1.css";

function Page1() {
  return (
    <div className="container">
      <Navbar />

      <div className="ward other-top">
        <h4>PRIVATE WARD</h4>
        <h3>
          <b>PRIVATE WARD:</b>
        </h3>

        <p>
          {" "}
          The hospital has 16 bedded, special wards Patients can either take
          full room or single sharing bed according to their convenience.
          <br />
          Each room has attached wash room facility, Drinking RO water and hot
          water is made available 24 hours Each room is equipped with central
          oxygen <br />
          and central suction, ward is provided with with portable suction,
          crash cart, resuscitation kit, and emergency drugs, patient monitoring
          devices
          <br />
          qualified teaching staff, residents and sufficient nursing staff are
          working round the clock to monitor and provide care to the patients.
          <br />
          <br />
          <table className="center">
            <tr>
              <th>Room number</th>
              <th>Service available</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>20-25</td>
              <td>
                Clean Beds, 02
                <br />
                Enough,Food So On
              </td>
              <td>Rs 1000/day</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </p>
        <br />

        <h4>AAPDA WARD</h4>

        <h3>
          <b>AAPDA WARD:</b>
        </h3>

        <p>
          {" "}
          At the hospital a separate accident & emergency unit functions round
          the clock to deal with different types of medical and
          <br />
          surgical contingencies., A specialized, state of the art operation
          theatre with two operating tables has been assigned to the unit.
          <br />
          High tech equipments like monitors, ventilators, defibrillators, etc.,
          offer critical medical services during emergency situation.
          <br />
          The Emergency Unit comprises its very own staff of specialists,
          paramedics and nurses.
          <br />
          <br />
          <table className="center">
            <tr>
              <th>Room number</th>
              <th>Service available</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>20-25</td>
              <td>
                Clean Beds, 02
                <br />
                Enough,Food So On
              </td>
              <td>Rs 1000/day</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </p>
        <br />

        <h4>PAYING WARD</h4>

        <h3>
          <b>PAYING WARD:</b>
        </h3>

        <p>
          {" "}
          Hospital has 14 bedded deluxe rooms with A/C & TV.Patients can either
          take full room or single sharing bed according to their
          <br />
          convenience Each room is equipped with Patient monitoring devices,
          central oxygen and central suction, ward is provided with with <br />
          portable suction, crash cart, resuscitation kit, and emergency drugs,
          patient monitoring devices qualified teaching staff, residents
          <br />
          and sufficient nursing staff are working round the clock to monitor
          and provide care to the patients.
          <br />
          <br />
          <table className="center">
            <tr>
              <th>Room number</th>
              <th>Service available</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>20-25</td>
              <td>
                Clean Beds, 02
                <br />
                Enough,Food So On
              </td>
              <td>Rs 1000/day</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </p>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Page1;
