import React from "react";
import "./bodyparts.css";
import body from "../../image/body/man.png";

function Bodyparts() {
  return (
      <div className="container">
    <div className="structure male">
      <img src={body} />
      <ul className="body_list left">
        <li className="eyeMpointer">
          <a href="./lora.html">
            <span className="txt">Eye</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="earMpointer">
          <a href="./lora.html">
            <span className="txt">Ear</span>
            <span className="dot"></span>
          </a>
        </li>

        <li className="teethMpointer">
          <a href="./lora.html">
            <span className="txt">Teeth</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="throatMpointer">
          <a href="./lora.html">
            <span className="txt">Throad</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="liverMpointer">
          <a href="./lora.html">
            <span className="txt">Liver</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="handMpointer">
          <a href="./lora.html">
            <span className="txt">Arm</span>
            <span className="dot"></span>
          </a>
        </li>

        <li className="lowerBackMpointer">
          <a href="./lora.html">
            <span className="txt">Lower back</span>
            <span className="dot"></span>
          </a>
        </li>

        <li className="thighMpointer">
          <a href="./lora.html">
            <span className="txt">Thigh</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="footMpointer">
          <a href="./lora.html">
            <span className="txt">Foot</span>
            <span className="dot"></span>
          </a>
        </li>
      </ul>
      <ul className="body_list right">
        <li className="brainMpointer">
          <a href="./lora.html">
            <span className="txt">Brain</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="noseMpointer">
          <a href="./lora.html">
            <span className="txt">Nose</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="heartMpointer">
          <a href="./lora.html">
            <span className="txt">Heart</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="lungMpointer">
          <a href="./lora.html">
            <span className="txt">Lung</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="elbowMpointer">
          <a href="./lora.html">
            <span className="txt">Elbow</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="spineMpointer">
          <a href="./lora.html">
            <span className="txt">Spine</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="stomachMpointer">
          <a href="./lora.html">
            <span className="txt">Stomach</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="hipMpointer">
          <a href="./lora.html">
            <span className="txt">Hip</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="kneeMpointer">
          <a href="./lora.html">
            <span className="txt">Knee</span>
            <span className="dot"></span>
          </a>
        </li>
        <li className="ankleMpointer">
          <a href="./lora.html">
            <span className="txt">Ankle</span>
            <span className="dot"></span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Bodyparts;
