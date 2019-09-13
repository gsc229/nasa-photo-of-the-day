import React, { useState, useEffect } from "react";

//import Picture from "./Picutre";

const Frame = props => {
  return (
    <div className="frame_container container">
      <div className="frame" key={props.date}>
        <div className="caption">
          <p className="title">Picture of the day: {props.title}</p>
          <p className="copyright">Photographer: {props.copyright}</p>
          <p className="date">{props.date}</p>
          <p className="explain">{props.explain}</p>
        </div>
        <img id="apod_pic" src={props.url} alt="APOD" />
      </div>
    </div>
  );
};
export default Frame;
