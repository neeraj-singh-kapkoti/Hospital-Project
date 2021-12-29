import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./page3.css";
import img from "../../image/1.jpg";

function Page1() {
  return (
    <div>
      <Navbar />

      <p>
        <h4>Type of vaccine available in hospital </h4>
        <img
          src={img}
          alt="parchi"
          // style="width:228px;height:128px"
          className="center"
        />
      </p>

      <h4>Vaccine available at hospital</h4>
      <p>
        1. BCG (Bacillus Calmette Guerin) 2. DPT (Diphtheria, Pertussis and
        Tetanus Toxoid) 3. OPV (Oral Polio Vaccine) 4. Measles 5. Hepatitis B 6.
        TT (Tetanus Toxoid) 7. JE vaccination (in selected high disease burden
        districts) 8. Hib containing Pentavalent vaccine D
      </p>

      <h4> Diseases Protected by Vaccination under Hospital</h4>
      <p>
        1. Diphtheria 2. Pertussis. 3. Tetanus 4. Polio 5. Tuberculosis 6.
        Measles 7. Hepatitis B 8. Japanese Encephalitis ( commonly known as
        brain fever) 9. Meningitis and Pneumonia caused by Haemophilus
        Influenzae type b.
      </p>
      <Footer />
    </div>
  );
}

export default Page1;
