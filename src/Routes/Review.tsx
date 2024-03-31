import React, { useContext, useEffect, useState } from "react";
import "../Styles/Review.css"
import { Context } from "../Provider/Usecontext";
import {motion} from "framer-motion"
export const Review = () => {
  const context = useContext(Context);
  const [formdatas, setformdata] = useState<string>("");
  const [greeting, setGreeting] = useState<string[]>([]);
  const [name, setName] = useState<string>(() => {
    const storedName = localStorage.getItem("firstName");
    return storedName ? storedName : context?.formdata.firstname ?? "";
  });

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const now = new Date();
  const singledayofweek = now.getDay()
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedHour = hour < 10 ? `0${hour}` : hour
  useEffect(() => {
    function handleday(day: number): string {
      switch (day % 10) {
        case 1:
          return day + "st"
          break;
        case 2:
          return day + "nd"
          break;
        case 3:
          return day + "rd"
          break;
        default:
          return day + "th"
      }
    }
    const validatetimeframe:string[] = [];
    if (hour < 12) {
      validatetimeframe.push("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      validatetimeframe.push("Good Afternoon");
    } else {
      validatetimeframe.push("Good Evening");
    }
    if (!name) {
      setformdata(handleday(dayOfMonth));
    }
   

    console.log(handleday(dayOfMonth))
    setGreeting(validatetimeframe)
  }, [singledayofweek, name]); // Only re-run on singledayofweek or name change
  let timeframe:React.ReactNode = ""
  if(greeting.includes("Good Morning")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute}am`}</div>
  }
  else if(greeting.includes("Good Afternoon")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute}PM`}</div>
  }
  else if(greeting.includes("Good Evening")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute} PM`}</div>
  }
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const formattedDate = `${dayOfWeek}, ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const monthss = months[now.getMonth()]
  console.log(formattedDate);
  const mo = monthss.length;

 
  const capitalizeFirstLetter = (letter: string | undefined) => {
    return letter ? letter.charAt(0).toUpperCase() + letter.slice(1) : "";
  }
  useEffect(() => {
    localStorage.setItem("firstName", context?.formdata.firstname ?? "");
  }, [context?.formdata.firstname]);
  return (
    <motion.div className="review_container"
    initial= {{opacity:0}}
    animate = {{opacity: 1}}
    exit={{opacity: 0 }}>
      <span className="info_container"> {dayOfWeek} {formdatas} {monthss}, {year} </span>
      <span className="info_container2">{timeframe}</span>
      <div className="p">
        <p>{greeting}, {capitalizeFirstLetter(name)} 😁</p>
      </div>
      <div className="q">
        <p>The journey of a <br></br>thousand miles begins<br></br> with a first<br></br> step</p>
      </div>
    </motion.div>
  );
};
