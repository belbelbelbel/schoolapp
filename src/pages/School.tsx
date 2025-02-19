import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import '../Styles/School.css';
import { motion } from "framer-motion"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { IoFilterSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { Context, Usecontext } from '../Provider/Usecontext';
import Cookies from 'js-cookie';
import { Sidebar } from './Dashboard/Sidebar';
import { FilteredOptions } from './components/FilteredOptions';
export const School = () => {
  const [input, setInput] = useState("");
  const [error, seterror] = useState("")
  const [search, setsearch] = useState([])
  const [shownavbar, setshownavbar] = useState(false);
  const [showFiltered, setshowFiltered] = useState(false)
  const user = useContext(Context)
  const [isloading, setisloading] = useState(true)
  const [ownership, setownership] = useState("")
  const [fees, setFees] = useState("")
  const [state, setState] = useState("")
  const accesstokena = Cookies.get('token')
  let display: React.ReactNode
  const handleFilteredCont = () => {
    setshowFiltered(!showFiltered)
    if (showFiltered === false) {
      // setownership("")
      if (ownership) {
        setFees("")
      }
      if (fees) {
        setownership("")
      }
      setInput(input)
    }
    else {
      // setownership(ownership)
    }
  }


  const handleshowSidebar = () => {
    setshownavbar(!shownavbar);
  }
 
  useEffect(() => {
    const fetchData = async () => {
      setisloading(true)
      try {
        const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/?name=${input}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accesstokena}`,
          },
        });
        const result = await res.json();
        if (input.length > 3) {
          setsearch(result);
          seterror(result.message);
          console.log(result)
        } else {
          setsearch([]);
        }
        if (!res.ok) {
          seterror(result.message);
        }
      } catch (error) {
        seterror("Failed to fetch data");
      }
      finally {
        setisloading(false)
      }
    };
    if (input.length > 0) {
      fetchData();
    }
  }, [input]);


  useEffect(() => {
    const handleFilteredSearch = async (ownership: string) => {
      try {
        const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/filter?ownership=${ownership}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accesstokena}`,
          },
        });
        const result = await res.json();
        // console.log(result);
        if (input.length !== 0) {
          seterror(result.message)
          // setisloading(false)
          setsearch(result)
        }
        else {
          setownership("")
          setsearch([])
        }
      } catch (error) {
        // console.log(error);
      }
    };
    handleFilteredSearch(ownership);
    return () => {
      setsearch([])
    }
  }, [ownership]);


  useEffect(() => {
    const handleFilteredSearch = async (fees: string) => {
      try {
        const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/filter?fees=${fees}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accesstokena}`,
          },
        });
        const result = await res.json();
        // console.log(result);
        if (input.length !== 0) {
          seterror(result.message)
          // setisloading(false)
          setsearch(result)
        }
        else {
          setownership("")
          setsearch([])
        }
      } catch (error) {
      }
    };
    handleFilteredSearch(fees);
    return () => {
      setsearch([])
    }
  }, [fees]);


  useEffect(() => {
    const handleFilteredSearch = async (location: string) => {
      try {
        const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/filter?fees=${location}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accesstokena}`,
          },
        });
        const result = await res.json();
        // console.log(result);
        if (input.length !== 0) {
          seterror(result.message)
          // setisloading(false)
          setsearch(result)
        }
        else {
          setownership("")
          setsearch([])
        }
      } catch (error) {
        // console.log(error);
      }
    };
    handleFilteredSearch(state);
    return () => {
      setsearch([])
    }
  }, [state]);

  const handleOnchange = (value: string) => {
    setInput(value)
    if (input.length === 0) {
      return <div>does not match</div>
    }
  }

  const handleOnchangefilter = (value: string) => {
    setownership(value)
    if (input.length === 0) {
      return <div>does not match</div>
    }
  }

  const handleOnchangeFees = (value: string) => {
    setFees(value)
    if (input.length === 0) {
      return <div>does not match</div>
    }
  }
  const handleOnchangeState = (value: string) => {
    setState(value)
    if (input.length === 0) {
      return <div>does not match</div>
    }
  }

  const hanleremove = () => {
    setInput("")
  }



  if (input.length === 0) {
    display = <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", justifyItems: "center", position: "relative", right: "0rem", top: "20vh", alignItems: "center", margin: "0rem auto" }}><img loading='lazy' src="/Web search-bro 1.png" alt="" style={{ width: "85vw" }} /> <div style={{ fontFamily: "inter", fontSize: "5vw", position: "relative", bottom: "5.6vw", left: "1vw", color: "#0B3C49", letterSpacing: "1px" }}>Search for institutions here!</div></div>;
  } else if (search.length === 0) {
    display = <div>
      {
        isloading ? <div className='text-center text-[1.1rem] font-medium mt-[2rem]'>Loading ...</div> : <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0 } }}
        style={{ fontFamily: "urbanist", fontSize: "4.7vw", position: "relative", left: "0rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "2vw 0rem" }}>School <div style={{ fontFamily: "", color: "#8B452D" }}> "{input}"</div> not found</motion.div>
      }
    </div>
  } else {
    <div className='display'>
      {

        display = search.map((data: {
          _id: any;
          name: React.ReactNode;
        }) => (
          <Link to={`/university/${data._id}`} key={data._id} >

            <div className='display2'>
              <div className='display3'>{data.name}</div>
              <div className='display4'>
                <div><img src="/Vector.png" alt="search page image " /></div>
              </div>
            </div>
          </Link>
        ))
      }
      <div style={{ color: "red" }}>{error}</div>
    </div>

  }


  return (
    <div>
      {
        <motion.div
          initial={{}}
          animate={{}}
          exit={{}}
          className='school pt-[1rem]'>
          <div >
            <div className='flex items-center justify-evenly '>
              {
                !shownavbar ? <div><img src="/Menu button.svg" alt="menu" onClick={handleshowSidebar} /></div> : <div><img src="/Menu button.svg" alt="menu" onClick={handleshowSidebar} /></div>
              }
              <div className="school_filter">
                <input
                  placeholder="Search here"
                  value={input}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
                />
                <button type="submit" className='img_btn'>
                  {
                    input.length === 0 ? (<IoMdSearch className='img' fontSize="6vw" color='#8D8D8D' />) : (<IoClose onClick={hanleremove} className='img' fontSize="6vw" color='#8D8D8D' />)
                  }
                </button>
              </div>
              <div onClick={handleFilteredCont}><IoFilterSharp className='text-[6vw]' /> </div>
            </div>
            {
              showFiltered && (
                <div className='absolute flex justify-center items-center rounded-[10px]  shadow-2xl top-[20vw] right-0 mx-auto z-50 bg-white w-[75%]  h-[65vw]'>
                  <FilteredOptions handleOnChangeFilter={handleOnchangefilter} state={state} fees={fees} handleOnChangeState={handleOnchangeState} handleOnChangeFees={handleOnchangeFees} ownership={ownership}  setShowFiltered={setshowFiltered} />
                </div>
              )
            }
            <div className=''>
              {
                input.length < 4 && input.length > 0 ? <div className='text-center mt-3'>School name must be atleast 3 characters</div> : display
              }
            </div>
            <div className="btn">
              <div className='display1'>
                {
                  !search && (<div>no result found</div>)
                }
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </div>
          {
            shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
          }
        </motion.div>
      }
    </div>
  );
};