import React, { useEffect, useState } from 'react';
import "../Styles/Faq.css";
import { useNavigate, useParams } from 'react-router-dom';
import Lottie from "lottie-react"
import animatedData from "../Styles/pointerlottie.json"
import { Footer } from './Footer';
import Cookies from 'js-cookie';
import { Skeleton } from './Skeleton';

interface props {
    name: string
    programs: string[]
}

export const Fees = () => {
    const params = useParams()
    const [prog, setprog] = useState<props>({ name: '', programs: [] })
    const [loading, setloading] = useState(false)
    const [depart, setdepart] = useState([])
    const navigate = useNavigate();
    const accesstoken = localStorage.getItem('token');
    const [siloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [links, setlinks] = useState(false)
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "", university: "", name: "", url: "" });
    const accesstokena = Cookies.get('token')
    const handlelback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                })
                const results = await res.json()
                console.log(results)
                console.log(results[0].programs)
                console.log(results[0].programs)
                console.log(results[0].programs[1])
                setdepart(results[0].programs)
                setprog(results[0])
                console.log(results[0].dates)
                setlinks(results[0].dates)
                // console.log(results.university.schools)
                if (!res.ok) {
                    // throw new Error("error parsing json")
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloading(false)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const handlefaq = async () => {
            setisloading(true);
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/links`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });
                const result = await res.json();
                console.log(result);
                setfaqs(result.relevantLinks[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setisloading(false);
            }
        };
        handlefaq();
    }, [params.universityid, accesstokena]);

    const handletoglr = () => {
        setshow(!show);
    };


    return (
        <div className='faq1'>
            <div className='faq2'>
                <div id="firsts"></div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="Undercover_container">
                        <div className='Undercover_containera' onClick={handlelback}>
                            <img src="/Arrow (2).svg" alt="goback" width="25vw" />
                        </div>
                        <div className="Undercover_containerb">
                            <div> <img src="/edit button.svg" alt="edit" /></div>
                            <div> <img src="/Vector (4).svg" alt="vector" /></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ fontSize: "5.5vw" }}>
                            {siloading ? "loading..." : faqs.name}
                        </div>
                        <div className='Undercover_container5'>
                            <div style={{ width: "80vw" }}><p>{!siloading ? faqs.name : "loading..."} </p></div>
                            <div className='Undercover_container6'>
                                <img src="/Ellipse 2.svg" alt="ellipse 2" />
                                <img src="/Ellipse 3.svg" alt="ellipse 3" />
                                <img src="/Ellipse 4.svg" alt="ellipse 4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grams' style={{ position: "relative", left: "-20vw" }}>Relevant Links</div>
                </div>
                <div style={{width:"85%",margin:'1rem auto'}}>
                        <li className='blinklist '>
                          {
                            loading ?<div className=' faqcon  w-full  mx-auto'>
                                 <Skeleton /> 
                            </div>: (
                                <a href={faqs.url} style={{ color: "black" }}>
                                <div className='faqcont' style={{ display: "flex", alignItems: "center" }}>
                                    <h2 style={{ padding: "0rem 7vw", fontWeight: "500", fontSize: "8w" }}>Click for more info </h2>
                                    <div style={{ width: "9vw", textAlign: "center" }}>
                                        <Lottie animationData={animatedData}></Lottie>
                                    </div>
                                </div>
                            </a>
                            )
                          }
                        </li>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}