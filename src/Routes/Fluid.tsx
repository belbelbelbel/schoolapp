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
export const Fluid = () => {
    const params = useParams();
    const navigate = useNavigate();
    const accesstoken = localStorage.getItem('token');
    const [siloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "" });

    const handlelback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const handlefaq = async () => {
            setisloading(true);
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/faq`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                });
                const result = await res.json();
                console.log(result);
                console.log(result.faq[0]);
                setfaqs(result.faq[0]);
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

    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                });
                const result = await res.json();
                setsearchs(result);
                if (!res.ok) {
                    throw new Error("error occurred in the description");
                }
            } catch (error) {
                console.log("description error", error);
            }
        };
        fetchdescribe();
    }, [params.universityid, accesstoken]);

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
                        <h2>
                            {siloading ? "loading..." : searchs.name}
                        </h2>
                        <div className='Undercover_container5'>
                            <div><p>Fluid Scholars.. <br /></p></div>
                            <div className='Undercover_container6'>
                                <img src="/Ellipse 2.svg" alt="ellipse 2" />
                                <img src="/Ellipse 3.svg" alt="ellipse 3" />
                                <img src="/Ellipse 4.svg" alt="ellipse 4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grams' style={{ position: "relative", left: "-20vw" }}>Fluid Students</div>
                </div>
                <div className='faqcont'>
                    <h3 style={{ padding: "0rem 1.5rem", fontWeight: "500", letterSpacing: "1px" }}> For people who are confused about their gender?</h3>
                </div>

            </div>
            <Footer />
        </div>
    );

}
