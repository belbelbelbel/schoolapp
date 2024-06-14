import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../Provider/Usecontext';
import { IoClose } from 'react-icons/io5';
import Cookies from 'js-cookie';
interface showprops {
    setshowschool: (showschool: boolean) => void
}
export const Schools2 = ({ setshowschool }: showprops) => {
    const [input, setInput] = useState("");
    const [error, seterror] = useState("")
    const [search, setsearch] = useState([])
    const user = useContext(Context)
    // const [isloading, setisloading] = useState(true)
    const navigate = useNavigate()
    const accesstokena = Cookies.get('token')
    const jwtToken = encodeURIComponent("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmQ0ZjNkMWY2ODgxMWQ2ZDUwOGY3MCIsIm5hbWUiOiJjaGlhZ296aWUgcm9uYWxkIiwicGhvbmUiOiIwODEyOTM4MTg2OSIsImlhdCI6MTcxNDI0ODY3OCwiZXhwIjoxNzE0NTA3ODc4fQ.DlDQaCIjU1zySdBxEnM1aNHz0NT0cdIXejgPl2TcuSE");
    useEffect(() => {
        const handlefilter = async (input: string) => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/?name=${input}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
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
        display = <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", position: "relative", right: "-3rem", top: "25vh", alignItems: "center", margin: "0rem auto" }}> <div style={{ fontFamily: "inter", fontSize: "5vw", position: "relative", bottom: "-1vw", left: "3vw", color: "#0B3C49" }}>Search for institutions here!</div></div>;

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
    function handlelback(): void {

    }

    return (
        <motion.div
            initial={{}}
            animate={{}}
            exit={{}}
            className='schoolss'>

            {/* // isloading ? ( */}
            <div >
                <div style={{ width: "84%", margin: "0rem auto" }}>
                    <div className="Covenant_container8">
                        <div style={{ cursor: "pointer" }}>  <img src="/Arrow (2).svg" alt="" onClick={() => setshowschool(true)} width="25vw" /></div>
                        <div className="Covenant_container8a">
                            <div style={{ cursor: "pointer" }}> <img src="/edit button.svg" alt="wearfs" /></div>
                            <div style={{ cursor: "pointer" }}> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                        </div>
                    </div>
                </div>
                <div className="Covenant_container2">
                    <div className="Covenant_container3">
                        <div style={{ cursor: "pointer" }}><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                        <div className="Covenant_container_input">  <input type="text" placeholder="Search here" value={input} autoFocus onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event.target.value)} /></div>
                    </div>
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
                        <div style={{ display: "flex", flexDirection: "column", fontFamily: "inter", justifyContent: "start", alignItems: "start", gap: "10.5vw" }}>
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
}
