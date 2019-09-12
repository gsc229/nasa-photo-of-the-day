import React, { useState, useEffect } from "react";

//import Picture from "./Picutre";

const Frame = props => {
  return (
    <div className="container">
      <div className="frame" key={props.date}>
        <img id="apod_pic" src={props.url} alt="APOD" />
        <div className="caption">
          <p className="title">Picture of the day: {props.title}</p>
          <p className="copyright">Photographer: {props.copyright}</p>
          <p className="date">{props.date}</p>
          <p className="explain">{props.explanation}</p>
        </div>
      </div>
    </div>
  );
};
export default Frame;
