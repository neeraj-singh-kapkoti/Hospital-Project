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
            <h5>Name : {props.item.name}</h5>
            <h5>Education : {props.item.edu}</h5>
            <h5>Profession : {props.item.prof}</h5>
            <h5>Room NO : {props.item.room}</h5>
            
          </div>
        </div>
      </section>

      <TableR item={props.item.test} />

      <section className="about" id="about">
        <div className="content">
          <h3>What is {props.item.type} ?</h3>
          <p className="new-line">
            {props.item.details1}
          </p>
        </div>
      </section>
     
    </div>
  );
}

export default SinglePage;
