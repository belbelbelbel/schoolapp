import React, { useEffect, useState } from 'react';
import '../Styles/School.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
export const School = () => {

  const [search, setsearch] = useState([])
  const [input, setInput] = useState("");

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjM5YTk0MzNiNzlkNjJjZTA0MTAzOSIsIm5hbWUiOiJkZW1vIGV4YW1wbGUiLCJwaG9uZSI6IjEyMzQ1Njc4OSIsImlhdCI6MTcxMzYxMDQzMywiZXhwIjoxNzEzODY5NjMzfQ._RBp9tNAhuo8jb8Ue5j1BJIbRLELob6vWEqwEF1EAPM";

  const handlefilter = async (value: string) => {
    try {
      const res = await fetch(`https://almaquin.onrender.com/api/university/overview?university=${value}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cookie" : `${authToken}`
        },
      })
      if (!res.ok) {
        throw new Error("failed to fecth data")
      }
      const result = await res.json()
      console.log(result.data)
    }
    catch (error) {
      console.error("error",error)
    }
  }
  const handleOnchange = (value:string) => {
    setInput(value)
    handlefilter(value)
  }
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("covenant-university")
  }
  return (     
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}>
      <div>
          <div className="school_filter">
            <input
              placeholder="Search"
              value={input}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
            />
            <button className='img_btn'><img src="Search.svg" alt="" className='img' width="19vw" /></button>
          </div>
        <div className="btn">
          <button type='button' className="signin_btn" onClick={handleClick}>
            co-uni
          </button>
        </div>
      </div>
    </motion.div>
  );
};