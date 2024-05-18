import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import '../Styles/School.css';
import { motion } from "framer-motion"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from './Loading';
import { Context, Usecontext } from '../Provider/Usecontext';
export const School = () => {
  const [input, setInput] = useState("");
  const [error, seterror] = useState("")
  const [search, setsearch] = useState([])
  const user = useContext(Context)
  // const [isloading, setisloading] = useState(true)
  const navigate = useNavigate()
  const jwtToken = encodeURIComponent("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmQ0ZjNkMWY2ODgxMWQ2ZDUwOGY3MCIsIm5hbWUiOiJjaGlhZ296aWUgcm9uYWxkIiwicGhvbmUiOiIwODEyOTM4MTg2OSIsImlhdCI6MTcxNDI0ODY3OCwiZXhwIjoxNzE0NTA3ODc4fQ.DlDQaCIjU1zySdBxEnM1aNHz0NT0cdIXejgPl2TcuSE");
  useEffect(() => {
    const handlefilter = async (input: string) => {
      try {
        const res = await fetch(`https://almaquin.onrender.com/api/university/?name=${input}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            "Authorization": jwtToken,
          },
        })
        const result = await res.json();
        console.log()
        if (input.length !== 0) {
          setsearch(result)
          console.log(result);
          // setisloading(false)
        }
        else {

        }

        if (!res.ok) {
          throw new Error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.log('Error parsing JSON:', error, input);
        // setisloading(false)
      }
    }
    handlefilter(input)


    return () => {
      setsearch([])
    }
  }, [input])
  // if (!user?.formdata.email) {
  //   navigate("/signin")
  // }
  const handleOnchange = (value: string) => {
    setInput(value)
    if (input.length === 0) {
      return <div>does not match</div>
    }
  }
  // if (isloading) {
  //   return <Loading />
  // }
  const hanleremove = () => {
    setInput("")
  }
  let display: React.ReactNode
  // if (isloading) {
  //   display = <Loading />;
  // } else
 if (input.length === 0) {
    display = <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", position: "relative", right: "-3rem", top: "25vh", alignItems: "center", margin: "0rem auto" }}><img src="/freepik--Character--inject-2.png" alt="" style={{ width: "40vw" }} /> <div style={{ fontFamily: "inter", fontSize: "5vw", position: "relative", bottom: "-1vw", left: "5vw", color: "#0B3C49" }}>Search for institutions here!</div></div>;

  } else if (search.length === 0) {
    display = <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      style={{ fontFamily: "urbanist", fontSize: "4.7vw", position: "relative", left: "3.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>School  <div style={{ fontFamily: "fantasy", color: "#8B452D" }}> "{input}"</div> not found</motion.div>;
  } else {

    display = search.map((data: {
      _id: any;
      name: React.ReactNode;
    }) => (
      <Link to={`/university/${data._id}`} key={data._id} >

        <div >
          <div style={{ fontSize: "5vw" }}>{data.name}</div>
        </div>

      </Link>
    ));

  }
  //   useEffect(() => {
  //     if (signupClicked) {
  //         const timer = setTimeout(() => {
  //             setSignupClicked(false);
  //         }, 700);
  //         return () => clearTimeout(timer);
  //     }
  // }, [signupClicked]);

  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      className='school'>
      
        {/* // isloading ? ( */}
          <div>
            <div className="school_filter">
              <input
                placeholder="Search"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
              />
              <button type="submit" className='img_btn'>
                {
                  input.length === 0 ? (<IoMdSearch className='img' fontSize="7vw" color='#8D8D8D' />) : (<IoClose onClick={hanleremove} className='img' fontSize="7vw" color='#8D8D8D' />)
                }
              </button>
            </div>
            <div className="btn">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", position: "relative", right: "14vw", margin: "0vw auto" }}>
                {
                  !search && (<div>no result found</div>)
                }
                <div style={{ display: "flex", flexDirection: "column", fontFamily: "inter", justifyContent: "start", alignItems: "start", gap: "10.5vw"}}>
                  {display}
                </div>
              </div>


              {/* <div style={{ color: 'red' }}>{error}</div> */}
              <ToastContainer></ToastContainer>
            </div>
          </div>
        ) 
        {/* // : (<Loading />) */}
      
    </motion.div>
  );
};