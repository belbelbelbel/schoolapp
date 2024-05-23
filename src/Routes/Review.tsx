import React, { useContext, useEffect, useState } from "react";
import "../Styles/Review.css";
import { Context } from "../Provider/Usecontext";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export const Review = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const [formdatas, setFormdata] = useState<string>("");
  const [greeting, setGreeting] = useState<string[]>([]);
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const data = location.state;
  
  useEffect(() => {
    if (location.state?.data?.firstName) {
      setName(location.state.data.firstName);
    }
  }, [location.state]);

  const handleCloseModal = () => {
    setShow(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate("/school");
    },3500);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const now = new Date();
  const singledayofweek = now.getDay();
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedHour = hour < 10 ? `0${hour}` : hour;

  useEffect(() => {
    function handleday(day: number): string {
      if (day === 11 || day === 12 || day === 13) {
        return day + "th";
      }
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    }

    const validatetimeframe: string[] = [];
    if (hour < 12) {
      validatetimeframe.push("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      validatetimeframe.push("Good Afternoon");
    } else {
      validatetimeframe.push("Good Evening");
    }

    setFormdata(handleday(dayOfMonth));
    setGreeting(validatetimeframe);
  }, [dayOfMonth, hour]);

  let timeframe: React.ReactNode = "";
  if (greeting.includes("Good Morning")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute}AM`}</div>;
  } else if (greeting.includes("Good Afternoon")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute}PM`}</div>;
  } else if (greeting.includes("Good Evening")) {
    timeframe = <div>{`${formattedHour}:${formattedMinute}PM`}</div>;
  }

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const formattedDate = `${dayOfWeek}, ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthss = months[now.getMonth()];
  const mo = monthss.length;

  const capitalizeFirstLetter = (letter: string | undefined) => {
    return letter ? letter.charAt(0).toUpperCase() + letter.slice(1) : "";
  };

  return (
    <motion.div className="review_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0 } }}
      exit={{ opacity: 0 }}
    >
      {show && (
        <div className="" onClick={handleCloseModal}>
          <div className="" onClick={(e) => e.stopPropagation()}>
            <div className="info">
              <div>
                <span className="info_container">
                  {dayOfWeek} {formdatas} {monthss}, {year}
                </span>
                <span className="info_container2">{timeframe}</span>
                <div className="p">
                  <div>😁😀</div>
                  <p>{greeting}, {capitalizeFirstLetter(name)}</p>
                </div>
                <div className="q">
                  <p>The journey of a <br />thousand miles begins<br /> with a first<br /> step</p>
                </div>
              </div>
              <div className="info_img">
                <img src="Hiking-rafiki 1.svg" alt="retgert" />
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
