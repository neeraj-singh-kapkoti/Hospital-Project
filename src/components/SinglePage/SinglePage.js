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
            <h2>Name : {props.item.name}</h2>
            <h2>Education : {props.item.edu}</h2>
            <h2>Profession : {props.item.prof}</h2>
            <h2>Room NO : {props.item.room}</h2>
            
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
