import React, { ReactNode, useEffect, useState } from 'react';
import '../Styles/School.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

export const School = () => {

  const [input, setInput] = useState("");
  const [search, setsearch] = useState([])

  // const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M…zIzfQ.sdhvgd4HXmcs43YMjZgVxn3Uz9HNtjCqClmT8vFQmwk"
  const jwtToken = encodeURIComponent("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmQ0ZjNkMWY2ODgxMWQ2ZDUwOGY3MCIsIm5hbWUiOiJjaGlhZ296aWUgcm9uYWxkIiwicGhvbmUiOiIwODEyOTM4MTg2OSIsImlhdCI6MTcxNDI0ODY3OCwiZXhwIjoxNzE0NTA3ODc4fQ.DlDQaCIjU1zySdBxEnM1aNHz0NT0cdIXejgPl2TcuSE");
  const handlefilter = async (value: string) => {
    try {
      const res = await fetch(`https://almaquin-rua7.onrender.com/api/university/6627fdcbacea236e2e51940/?name=${value}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          "Authorization": jwtToken
        },
      })
      const result = await res.json();
      console.log(result);
      setsearch(result)
      if (!res.ok) {
        throw new Error("Failed to fetch data from the API");
      } 
    } catch (error) {
      console.log('Error parsing JSON:', error, value);
    }
  };
  const handleOnchange = (value: string) => {
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
          {
            search.map((data: {
              founded: ReactNode;
              name: ReactNode; id: React.Key | null | undefined;
            }) => (
              <div key={data.id}>
                <div>{data.name}</div>
                <div>{data.founded}</div>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};