import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../Provider/Usecontext';
import { IoClose, IoFilterSharp } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { BiArrowBack } from 'react-icons/bi';
import { Sidebar } from '../../sideBar/Sidebar';
import { Loading } from './Loading';
import { FilteredOptions } from './FilteredOptions';
import { Footer } from './Footer';
interface showprops {
    setshowschool: (showschool: boolean) => void
}
export const Schools2 = ({ setshowschool }: showprops) => {
    const [input, setInput] = useState("");
    const [error, seterror] = useState("")
    const [isloading,setisLoading]   = useState(false)
    const [search, setsearch] = useState([])
    const [shownavbar, setshownavbar] = useState(false);
    const user = useContext(Context)
    const [ownership, setownership] = useState("")
    const [fees, setFees] = useState("")
    const [state, setState] = useState("")
    const [showFiltered, setshowFiltered] = useState(false)
    const navigate = useNavigate()
    const accesstokena = Cookies.get('token')
    const handleFilteredCont = () => {
        setshowFiltered(!showFiltered)
        if (showFiltered === false) {
          
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
    const handleshow = () => {
        setshownavbar(!shownavbar)
    }
    useEffect(() => {
        const handlefilter = async (input: string) => {
            setisLoading(true)
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/?name=${input}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    },
                })
                const result = await res.json();
                // console.log()
                if (input.length !== 0) {
                    setsearch(result)
                    // console.log(result);
                    // setisloading(false)
                }

                if (!res.ok) {
                    // throw new Error("Failed to fetch data from the API");
                }
            } catch (error) {
                // console.log('Error parsing JSON:', error, input);
                // setisloading(false)
            }
            finally{
                setisLoading(false)
            }
        }
        handlefilter(input)


        return () => {
            setsearch([])
        }
    }, [input])

    const handleOnchange = (value: string) => {
        setInput(value)
        if (input.length === 0) {
            return <div>does not match</div>
        }
    }
    useEffect(() => {
        const handleFilteredSearch = async (ownership: string) => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/filter?ownership=${ownership}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        // "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    },
                });
                const result = await res.json();
                // console.log(result);
                if (input.length !== 0) {
                    seterror(result.message)
                    //   setisloading(false)
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
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    },
                });
                const result = await res.json();
                // console.log(result);
                if (input.length !== 0) {
                    seterror(result.message)
                    //   setisloading(false)
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
                        // "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    },
                });
                const result = await res.json();
                // console.log(result);
                if (input.length !== 0) {
                    seterror(result.message)

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
    }, [state])

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
    let display: React.ReactNode
    if (input.length === 0) {
        //   display = <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", justifyItems: "center", position: "relative", right: "0rem", top: "20vh", alignItems: "center", margin: "0rem auto" }}><div/> <div style={{ fontFamily: "inter", fontSize: "5vw", position: "relative", bottom: "5.6vw", left: "1vw", color: "#0B3C49", letterSpacing: "1px" }}>Search for institutions here!</div></div>;
    } else if (search.length === 0) {
        display = <div>
          {
            isloading ? <div className='text-center text-xl font-medium mt-[2rem]'>Loading ...</div> : <motion.div initial={{ opacity: 0 }}
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
    function handlelback(): void {

    }

    return (
        <motion.div
            initial={{}}
            animate={{}}
            exit={{}}
            className='schoolss flex flex-col justify-between'>

            {/* // isloading ? ( */}
            <div >

                <div style={{ width: "84%", margin: "0rem auto" }}>
                    <div className="Covenant_container8">
                        <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "70vw" }}><BiArrowBack onClick={() => setshowschool(true)} className='text-[5.2vw]' /></div>
                        <div className="Covenant_container8a">
                            {/* <div style={{ cursor: "pointer" }}> <img src="/edit button.svg" alt="edit" /></div>
                            <div style={{ cursor: "pointer" }}> <img src="/Vector (4).svg" alt="edit" /></div> */}
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[1.5vw] mt-[1.7rem] w-[85%] rounded-[6px] mx-auto ' style={{ backgroundColor: "rgba(215, 214, 214, 0.5)" }}>
                    {
                        !shownavbar ? <div ><img src="/Menu button.svg" alt="menu" onClick={handleshow}  className='w-[5vw]'/></div> : <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} className='w-[5vw]'/></div>
                    }
                    <div className="school_filters ">
                        <input
                            placeholder="Search here"
                            value={input}
                            autoFocus
                            className='py-4'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)}
                        />
                        <button type="submit" className='img_btn'>
                            {
                                input.length === 0 ? (<IoMdSearch className='img' fontSize="6vw" color='#8D8D8D' />) : (<IoClose onClick={hanleremove} className='img' fontSize="6vw" color='#8D8D8D' />)
                            }
                        </button>
                    </div>
                    <div onClick={handleFilteredCont}><IoFilterSharp className='text-[5vw]' /> </div>
                </div>
                {display}
                <div className="btn">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", position: "relative", right: "14vw", margin: "0vw auto" }}>
                        {
                            !search && (<div>no result found</div>)
                        }
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
                <div className=''>
                    {
                        showFiltered && (
                            <div className='absolute flex justify-center items-center rounded-[10px]  shadow-2xl top-[45vw] right-0 mx-auto z-50 bg-white w-[75%]  h-[65vw]'>
                                <FilteredOptions  handleOnChangeFilter={handleOnchangefilter} state={state} fees={fees} handleOnChangeState={handleOnchangeState} handleOnChangeFees={handleOnchangeFees} ownership={ownership}  setShowFiltered={setshowFiltered} />
                            </div>
                        )
                    }
                </div>
            </div>

   
            {
                shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
            }
      
        </motion.div>
    );
}
