import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./page2.css";
import img from "../../image/1.jpg";

function Page2() {
  return (
    <div className="container facilities">
      <Navbar />
      <div className="other-top">
      <h2>Regestration fee in hospital</h2>
    
    <img src={img} alt="parchi" className="hp" />
        <p>
          1-Registartion departemnt ( Parchi ) availabe in front of the gate from 9:00 am to 2:00Ppm<br/>  
          2- Its open every Monday to Saturday. <br/> 
          3-Regstration (Parchi) cost is RS 28. <br/> 
          4- Registration parchi covers all basic treatments and medicines available in hospital<br/> 
          5- Registarion Parchi Valid for 15 days only<br/> 
         </p><br/>
    
    
    
        <h2>Medicines in hospital</h2>
        <p>
          Medicines prescribed by CGHS doctors/specialists, which are available in Wellness Center are supplied immediately. For the branded<br/> 
        medicines prescribed by the specialist, if the same composition (chemical salt), same strength with same therapeytic value is <br/> 
        available in the Wellness Center in different brand name/generic name, the same will be supplied against the prescription. Supply of<br/> 
        vitamins/minerals/antioxidants prescribed by the specialist will be restricted to CGHS formulary medicines. Products classNameified as <br/> 
        Dietary Supplements/food items, cosmetics etc. are not admissible for supply by CGHS. Medicines which are otherwise admissible and <br/> 
        not available in the store of the Wellness Center will be indented from Authorized Local Chemist (ALC) and will be normally <br/> 
        distributed on the next working day after receipt of the same from ALC. These indented medicines will have to be collected by the <br/> 
        beneficiary maximum within 15 days of date of indent. Medicines for chronic diseases may be issued for 3 months at a time by any CGHS <br/> 
        Doctor against the valid prescription of a specialist. If the beneficiary is planning to go abroad, medicines prescribed may be issued<br/>  
        upto 6 months at a time with permission of Addl. Director for which an application with copy of valid prescription, CGHS Card and proof<br/> 
        of travel has to be produced. All the medicines including ALC supplied medicines will be issued throughout the duty hours of the<br/> 
        Wellness center. For collection of indented medicines registration in the Wellness Centre is not required<br/> 
          </p>
    
    
    
    
    
    
        <h2>facilities for family planning</h2>
       <h3> MALE STERILIZATION PROCEDURE: </h3> <p>
        1-A vasectomy works by stopping sperm getting into a man's semen, the fluid that he ejaculates. The tubes <br/> 
        that carry sperm from a man's testicles to the penis are cut, blocked or sealed with heat. This means that when a man ejaculates, the<br/> 
        semen has no sperm in it and a woman's egg can't be fertilised. <br/> 
        2-This treatment free of cost by government. 3 Its perform in OT.<br/> </p>
         
        <h3>Condoms (nirodh) :</h3>
         <p>
         The free of cost condoms are distributed by ASHA workers. They are given at various government hospitals. Experts feel a possible<br/> 
        reason could be people opting for other contraceptives methods like pills and injections. The marketing of emergency contraceptive also plays <br/> 
        a role <br/> </p>
        
        <h3>Oral Pills:</h3>
        <p>
        The government is also providing oral pills (Chaya) to prevent pregnancies through hospitals. Earlier, 'Asha' tablets were <br/> 
        to be taken daily. Under the new system, two tablets are to be taken per week for the first three months and then one per week</p>
    
        <h2>Medical Certificates from hospital</h2>
        <p>
           A Medical Certificate is a statement given by physician or hospital to a person who undergoes medical treatment. It can even serve as a <br/>
        sick note or evidence of health condition. To Whom it May Concern Certificate is specifically designed for hospitals to meet its ever growing demands.<br/></p>
        <h2> What should be included in a medical certificate?</h2> 
        <p>1-Being in the form of an official, original & hard copy document. <br/>
        2-The name and address of the practitioner issuing the certificate clearly stated. <br/>
        3-Date the certificate is written and signed by the practitioner. 4-Date the examination took place.</p>
    
    
        <h2>Suggestion& Complain Box</h2><br/>
       
    <img src={img} alt="parchi"  className="hp" />
    <p>There is a Suggestion and complaint box available in the hospital in front of the hospital entrance.<br/>
      anybody can use it if they had problem from the hospital staff and other suggestion for hospital.</p>
     
      <Footer />
      </div>
    </div>
  );
}

export default Page2;
