import React, { useState } from "react";
import Frame from "./Frame";

export default function DatePicker() {
  let yyyy = new Date().getFullYear();
  let mm = new Date().getMonth() + 1;
  let dd = new Date().getDate();
  let today = `${yyyy}-${mm}-${dd}`;
  const earliestDay = new Date(1994, 5, 20);
  const latestDay = new Date(today);
  //console.log(`today is a :${typeof today}`);
  //const [date, setDate] = useState(today);
  // SET THE STATE
  const [year, setYear] = useState(yyyy);
  const [month, setMonth] = useState(mm);
  const [day, setDay] = useState(dd);
  let submitDay = `${year}-${month}-${day}`;
  let passDate = submitDay;
  console.log(`Submit Day: ${submitDay}`);
  console.log(`Pass Date: ${passDate}`);
  // EVENT HANDLERS
  let selectedDay = new Date(year - 1, month, day);

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
  // Function sets variable to be passed to Frame component;
  const passDateToFrame = e => {
    return passDate;
  };

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
      setMonth(12);
    } else {
      setMonth(month + 1);
    }
  };
  const monthMinusOne = e => {
    if (month <= 1) {
      setMonth(1);
    } else {
      setMonth(month - 1);
    }
  };

  const dayPlusOne = e => {
    if (day >= 31) {
      setDay(31);
    } else {
      setDay(day + 1);
    }
  };
  const dayMinusOne = e => {
    if (day <= 1) {
      setDay(1);
    } else {
      setDay(day - 1);
    }
  };

  return (
    <div className="date_picker_container">
      <h1>
        NASA's Astronomy Picture of the Day for: {year}-{month}-{day}
      </h1>
      <p>You can choose another date below to see past pictures:</p>
      <div className="date_buttons_container">
        <div className="select_year_container selector_container">
          <button onClick={yearPlusTen}>+ 10</button>
          <button onClick={yearPlusOne}>+1</button>
          <p>Year</p>
          <button onClick={yearMinusOne}>-1</button>
          <button onClick={yearMinusTen}>-10</button>
        </div>
        <div className="select_month_container selector_container">
          <button onClick={monthPlusOne}>+1</button>
          <p>Month</p>
          <button onClick={monthMinusOne}>-1</button>
        </div>
        <div className="select_month_container selector_container">
          <button onClick={dayPlusOne}>+1</button>
          <p>Day</p>
          <button onClick={dayMinusOne}>-1</button>
        </div>
        <button onClick={passDateToFrame}>Get Picture</button>
      </div>

      <Frame submitDay={submitDay} />
    </div>
  );
}
