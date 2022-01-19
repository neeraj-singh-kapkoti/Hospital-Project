import React from "react";
import "./bodyparts.css";
import body from "../../image/body/man.png";
import data from "../../Data/ServiceData";
import {Link} from "react-router-dom"

function Bodyparts() {
  return (

      <div className="container">
      <div className="body">
    <h1 className="heading"> Are You Uncertain About Body Parts ??</h1>
    <div className="structure male">
      <img src={body} alt="body"/>
      <ul className="body_list left">
        
        <li className="eyeMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Eye</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="earMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Ear</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>

        <li className="teethMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Teeth</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="throatMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Throad</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="liverMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Liver</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="handMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Arm</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>

        <li className="lowerBackMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Lower back</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>

        <li className="thighMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Thigh</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="footMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Foot</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
      </ul>
      <ul className="body_list right">
        <li className="brainMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Brain</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="noseMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Nose</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="heartMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Heart</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="lungMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Lung</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="elbowMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Elbow</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="spineMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Spine</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="stomachMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Stomach</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="hipMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Hip</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="kneeMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Knee</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
        <li className="ankleMpointer">
        <Link to="/servicePage"
                key={data[0].title}
                state={{
                  logo:data[0].logo,
                  img: data[0].doc_img,
                  details: data[0].DETAILS,
                  details1: data[0].DETAILS1,
                  type: data[0].title,
                  name: data[0].docName,
                  prof: data[0].docProf,
                  edu: data[0].docEduc,
                  room: data[0].roomNo,
                  desc: data[0].desc,
                  test: data[0].data
                }}
              >
          <a href="./lora.html">
            <span className="txt">Ankle</span>
            <span className="dot"></span>
          </a>
          </Link>
        </li>
      </ul>
    </div>
    <h5 style={{color: "white"}} > To Know More Click on that name...</h5>

    </div>
    </div>
  );
}

export default Bodyparts;
