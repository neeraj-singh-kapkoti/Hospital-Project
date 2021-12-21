import React from "react";
import {TableR } from "../TableR";
import "./singlePage.css";

function SinglePage(props) {
  console.log(props)
  return (
    <div className="container">
       <section className="category">
        <h1 className="heading">About Doc</h1>

        <div className="box-container">
          <div className="box">
            <img src={props.item.img} alt="" />
          </div>
          
          <div className="box2">
            <h1>Name : {props.item.name}</h1>
            <h1>Education : {props.item.edu}</h1>
            <h1>Profetion : {props.item.prof}</h1>
            <h1>Room NO : {props.item.room}</h1>
            
          </div>
        </div>
      </section>

      <h1 className="heading">TREATMENT & SERVICES AVAILABLE</h1>
      <TableR item={props.item.test} />

      <section className="about" id="about">
        <div className="image">
          <img src={props.item.logo} alt="" />
        </div>

        <div className="content">
          <h3>What is {props.item.type} ?</h3>
          <p>
            {props.item.desc}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dicta doloremque placeat porro, ipsam quia at beatae atque odit
            iste?
          </p>
        </div>
      </section>
     
    </div>
  );
}

export default SinglePage;
