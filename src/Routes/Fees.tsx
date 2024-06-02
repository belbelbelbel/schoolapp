import React, { useEffect, useState } from 'react';
import "../Styles/Faq.css";
import { useNavigate, useParams } from 'react-router-dom';
import Lottie from "lottie-react"
import animatedData from "../Styles/pointerlottie.json"
import { Footer } from './Footer';
import { motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Skeleton } from './Skeleton';
import { relative } from 'path';
import { Link } from 'react-router-dom';
export const Fees = () => {
    const params = useParams();
    const navigate = useNavigate();
    const accesstoken = localStorage.getItem('token');
    const [siloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "", university: "", name: "", url: "" });

    const handlelback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const handlefaq = async () => {
            setisloading(true);
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/links`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
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
    }, [params.universityid, accesstoken]);

    const handletoglr = () => {
        setshow(!show);
    };


    return (
        <div className='faq1'>
            <div className='faq2'>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="Undercover_container">
                        <div className='Undercover_containera' onClick={handlelback}>
                            <img src="/Arrow (2).svg" alt="" width="25vw" />
                        </div>
                        <div className="Undercover_containerb">
                            <div> <img src="/edit button.svg" alt="edit" /></div>
                            <div> <img src="/Vector (4).svg" alt="vector" /></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <h3 style={{fontWeight:"500"}}>
                            {siloading ? "loading..." : faqs.name}
                        </h3>
                        <div className='Undercover_container5'>
                            <div style={{width:"80vw"}}><p>{!siloading ? faqs.name : "loading..."} </p></div>
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
                <li className='blinklist'>
                    <a href={faqs.url} style={{ color: "black" }}>
                        <div className='faqcont' style={{ display: "flex", alignItems: "center" }}>
                            <h2 style={{ padding: "0rem 7vw", fontWeight: "500", fontSize:"6w" }}>Click for more info </h2>
                            <div style={{ width: "9vw", textAlign: "center" }}>
                                <Lottie animationData={animatedData}></Lottie>
                            </div>
                        </div>
                    </a>
                </li>

            </div>
            <Footer />
        </div>
    );
}