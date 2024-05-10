import React, { ReactNode, useEffect, useState } from 'react';
import '../Styles/School.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Covenant } from './Covenant';
import { Loading } from './Loading';
export const School = () => {
  const [input, setInput] = useState("");
  const [error, seterror] = useState("")
  const [search, setsearch] = useState([])
  const [isloading, setisloading] = useState(true)
  const jwtToken = encodeURIComponent("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmQ0ZjNkMWY2ODgxMWQ2ZDUwOGY3MCIsIm5hbWUiOiJjaGlhZ296aWUgcm9uYWxkIiwicGhvbmUiOiIwODEyOTM4MTg2OSIsImlhdCI6MTcxNDI0ODY3OCwiZXhwIjoxNzE0NTA3ODc4fQ.DlDQaCIjU1zySdBxEnM1aNHz0NT0cdIXejgPl2TcuSE");
  useEffect(() => {
    const handlefilter = async (input: string) => {
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
        let filt = []
        filt = result
        
        setisloading(false)
        console.log(result);
        setsearch(result)
        
        if (!res.ok) {
          throw new Error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.log('Error parsing JSON:', error, input);
        setisloading(false)
      }
    }
    handlefilter(input)
    return()=> {
      setsearch([])
    }
  }, [input])
  const handleOnchange = (value: string) => {
    setInput(value)
    if(input.length === 0) {
      return <div>does not match</div>
    }
  }
  if (isloading) {
    return <Loading />
  }

  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      className='school'>

      {
        !isloading ? (
          <div>
            <div className="school_filter">
              <input
                placeholder="Search"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
              />

              <button type="submit" className='img_btn'><img src="Search.svg" alt="" className='img' width="19vw" /></button>
            </div>
            <div className="btn">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {
                  search.length > 0 ? search.map((data: {
                    founded: ReactNode;
                    name: ReactNode; _id: React.Key | null | undefined;
                  }) => (
                    <Link to={`/university/${data._id}`} key={data._id}>
                      <div>
                        <div>{data.name}</div>
                      </div>
                    </Link>
                  )) : (<div style={{ justifyContent: "center", display: "flex", flexDirection: "column", position: "relative", right: "3rem", top: "30vh", alignItems: "center", margin: "0rem auto", width: "80%" }}>
                    <div><img src="/File searching-rafiki 1.svg" alt="aewsfcasdf" /></div>
                  </div>)
                }
              </div>
              {/* <div style={{ color: 'red' }}>{error}</div> */}
              <ToastContainer></ToastContainer>
            </div>
          </div>
        ) : (<Loading />)
      }
    </motion.div>
  );
};