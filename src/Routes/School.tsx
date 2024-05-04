import React, { ReactNode, useEffect, useState } from 'react';
import '../Styles/School.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { Covenant } from './Covenant';
export const School = () => {
  const [input, setInput] = useState("");
  const [error, seterror] = useState("")
  const [search, setsearch] = useState([])
  const jwtToken = encodeURIComponent("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmQ0ZjNkMWY2ODgxMWQ2ZDUwOGY3MCIsIm5hbWUiOiJjaGlhZ296aWUgcm9uYWxkIiwicGhvbmUiOiIwODEyOTM4MTg2OSIsImlhdCI6MTcxNDI0ODY3OCwiZXhwIjoxNzE0NTA3ODc4fQ.DlDQaCIjU1zySdBxEnM1aNHz0NT0cdIXejgPl2TcuSE");
  const handlefilter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://almaquin-rua7.onrender.com/api/university/?name=${input}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          "Authorization": jwtToken,
        },
      })
      const result = await res.json();
      console.log(result);
      setsearch(result)
      seterror(result.error)
      if (!res.ok) {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.log('Error parsing JSON:', error, input);
    }
  };
  const handleOnchange = (value: string) => {
    setInput(value)
  }
  useEffect(() => {
    if (input.length === 0) {
      setsearch([])
    }
  }, [input])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("covenant-university")
  }
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}>
      <form onSubmit={handlefilter}>
        <div className="school_filter">
          <input
            placeholder="Search"
            value={input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
          />
          <button type="submit" className='img_btn'><img src="Search.svg" alt="" className='img' width="19vw" /></button>
        </div>
        <div className="btn">
        
            <div>
              {
                search.length > 0 && search.map((data: {
                  founded: ReactNode;
                  name: ReactNode; _id: React.Key | null | undefined;
                }) => (
                  <Link to={`/university/${data._id}`} key={data._id}>
                    <div>
                    <div>{data.name}</div>
                  </div>
                  </Link>
                ))
              }
            </div>
  

          <div style={{ color: 'red' }}>{error}</div>
        </div>
      </form>
      <button className="signin_btn" onClick={handleClick}>
        co-uni
      </button>
    </motion.div>
  );
};