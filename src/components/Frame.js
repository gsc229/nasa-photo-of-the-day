import React, { useState, useEffect } from "react";

//import Picture from "./Picutre";
import axios from "axios";

export default function Frame(props) {
  const [pictureDataObj, setPictureDataObj] = useState({});
  /* pitureDataObj:
    {
      
    copyright: "Bray Falls"
    date: "2019-09-11"
    explanation: "What energizes the Heart Nebula?..."
    hdurl: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_2378.jpg"
    media_type: "image"
    service_version: "v1"
    title: "IC 1805: The Heart Nebula"
    url: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg"
    }
  */
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=2010-08-10&api_key=DEMO_KEY`
      )
      .then(response => {
        const picData = response.data;
        console.log(`From Fram useEffect: `, picData);
        setPictureDataObj(picData);
      })
      .catch(error => {
        console.log(`Sorry there's no picutre `, error);
      });
  }, []);
  if (!pictureDataObj.hdurl) return <h3>Loading...</h3>;
  return (
    <div className="container">
      <div className="frame">
        <img id="apod_pic" src={pictureDataObj.hdurl} alt="APOD" />
        <div className="caption">
          <p className="title">Picture of the day: {pictureDataObj.title}</p>
          <p className="copyright">Photographer: {pictureDataObj.copyright}</p>
          <p className="date">{pictureDataObj.date}</p>
          <p className="explain">{pictureDataObj.explanation}</p>
        </div>
      </div>
    </div>
  );
}
