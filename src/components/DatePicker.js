import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Frame from "./Frame";
import styled from "styled-components";

const upArrow = <FontAwesomeIcon icon={faArrowAltCircleUp} />;
const downArrow = <FontAwesomeIcon icon={faArrowAltCircleDown} />;

const ArrowBtn = styled.button`
  height: 45px;
  width: 45px;
  border: 1px solid grey;
  background: lightblue;
  cursor: pointer;
  border-radius: 0;
  font-weight: bolder;
`;

export default function DatePicker() {
  let yyyy = new Date().getFullYear();
  let mm = new Date().getMonth() + 1;
  let dd = new Date().getDate();
  let today = `${yyyy}-${mm}-${dd}`;

  const latestDay = new Date(today);

  // SET THE STATE DATEPICKER and picutreDataObject
  const [pictureDataObj, setPictureDataObj] = useState({});
  const [year, setYear] = useState(yyyy);
  const [month, setMonth] = useState(mm);
  const [day, setDay] = useState(dd);
  const submitDay = `${year}-${month}-${day}`;
  // setting the initial state of passDate to today from above
  const [passDate, setPassDate] = useState(today);

  console.log(`Submit Day: ${typeof submitDay}`);
  console.log(`Pass Date: ${typeof passDate}`);

  let url = pictureDataObj.hdurl;
  let title = pictureDataObj.title;
  let copyright = pictureDataObj.copyright;
  let explain = pictureDataObj.explanation;
  let date = pictureDataObj.date;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${passDate}&api_key=nlA0HaKZeNU9Umkt139XDanQEEfmYSJ2vC0JLwAJ`
      )
      .then(response => {
        const picData = response.data;
        console.log(`From DatePicker useEffect: `, picData);
        console.log(`from DatePicker .then passDate ${typeof passDate}`);
        setPictureDataObj(picData);
      })
      .catch(error => {
        const errorImage = `https://cdn-images-1.medium.com/max/800/1*esMflK7UItD8mWn4UbGedg.jpeg`;
        setPictureDataObj({ hdurl: errorImage });
        console.log(`Sorry there's no picutre `, error);
      });
  }, [passDate]);
  if (!pictureDataObj.hdurl) return <h3>Loading...</h3>;

  // EVENT HANDLERS
  //!!!! WARNINGS DONT GO ABOVE 1995/6/20 !!!!!!!!
  const earliestDay = new Date(1994, 5, 20);
  //!!!CAUTION CHANGING YEAR IN newDATE to anything year >= year, will cause an INFINITE LOOP!!!!!
  let selectedDay = new Date(year - 1, month, day);
  console.log(`Selected Day: ${selectedDay}`);
  console.log(`Earliest Day: ${earliestDay}`);
  if (selectedDay <= earliestDay) {
    setYear(1995);
    setMonth(parseInt("06"));
    setDay(20);
    alert(`That's a little too far back. Shoot for June 20, 1995 or later`);
    /* console.log(`selectedDay: ${selectedDay}`);
    console.log(`earliestDay: ${earliestDay}`);
    console.log(`selected less than earliest? ${selectedDay < earliestDay}`); */
  }
  if (selectedDay > latestDay) {
    setYear(yyyy);
    setMonth(mm);
    setDay(dd);
    alert(`NASA is good, but not that good. Try a date not set in the future`);
  }

  const yearPlusTen = e => {
    setYear(year + 10);
  };

  const yearPlusOne = e => {
    setYear(year + 1);
  };

  const yearMinusTen = e => {
    setYear(year - 10);
  };

  const yearMinusOne = e => {
    setMonth(parseInt("06"));
    setYear(year - 1);
    /* console.log(`selectedDay: ${selectedDay}`);
    console.log(`earliestDay: ${earliestDay}`);
    console.log(`selected less than earliest? ${selectedDay < earliestDay}`); */
  };
  const monthPlusOne = e => {
    if (month >= 12) {
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };
  const monthMinusOne = e => {
    if (month <= 1) {
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const dayPlusOne = e => {
    if (day >= 31) {
      setDay(1);
    } else {
      setDay(day + 1);
    }
  };
  const dayMinusOne = e => {
    if (day <= 1) {
      setDay(31);
    } else {
      setDay(day - 1);
    }
  };

  return (
    <div className="date_picker_container">
      <h2>Today is {today}</h2>
      <h1>
        NASA's Astronomy Picture of the Day for:<br></br>
        <span>
          {year}-{month}-{day}
        </span>
      </h1>
      <p>You can choose another date below to see past pictures:</p>
      <div className="date_buttons_container">
        <div className="select_year_container selector_container">
          <ArrowBtn onClick={yearPlusTen}>{upArrow} (10)</ArrowBtn>
          <ArrowBtn onClick={yearPlusOne}>
            {upArrow} <br></br>(1)
          </ArrowBtn>

          <p>Year: {year}</p>
          <ArrowBtn onClick={yearMinusOne}>
            {downArrow}
            <br></br>(1)
          </ArrowBtn>
          <ArrowBtn onClick={yearMinusTen}>{downArrow}(10)</ArrowBtn>
        </div>
        <div className="select_month_container selector_container">
          <ArrowBtn onClick={monthPlusOne}>{upArrow}</ArrowBtn>

          <p>Month: {month}</p>
          <ArrowBtn onClick={monthMinusOne}>{downArrow}</ArrowBtn>
        </div>
        <div className="select_month_container selector_container">
          <ArrowBtn onClick={dayPlusOne}>{upArrow}</ArrowBtn>

          <p>Day: {day}</p>
          <ArrowBtn onClick={dayMinusOne}>{downArrow}</ArrowBtn>
        </div>
        <div className="submit_container selector_container">
          <button id="submit_btn" onClick={() => setPassDate(submitDay)}>
            Get Picture
          </button>
        </div>
      </div>

      <Frame
        title={title}
        explain={explain}
        copyright={copyright}
        date={date}
        submitDay={submitDay}
        url={url}
        key={date}
      />
    </div>
  );
}
