import React, { useEffect, useState } from 'react';
import "../Styles/Faq.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Skeleton } from './Skeleton';
import Cookies from 'js-cookie';

export const Faq = () => {
    const params = useParams();
    const navigate = useNavigate();
    const accesstoken = localStorage.getItem('token');
    const [siloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "" });
    const accesstokena =  Cookies.get('token')
    const handlelback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const handlefaq = async () => {
            setisloading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/faq`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
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
    }, [params.universityid, accesstokena]);

    const handletoglr = () => {
        setshow(!show);
    };

    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });
                const result = await res.json();
                setsearchs(result);
                if (!res.ok) {
                    // throw new Error("error occurred in the description");
                }
            } catch (error) {
                console.log("description error", error);
            }
        };
        fetchdescribe();
    }, [params.universityid, accesstokena]);

    return (
        <div className='faq1'>
            <div className='faq2'>
            <div id="firsts"></div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="Undercover_container">
                        <div className='Undercover_containera' onClick={handlelback}>
                            <img src="/Arrow (2).svg" alt="gobak" width="25vw" />
                        </div>
                        <div className="Undercover_containerb">
                            <div> <img src="/edit button.svg" alt="edit" /></div>
                            <div> <img src="/Vector (4).svg" alt="vector" /></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{fontSize:"5.5vw"}}>
                            {siloading ? "loading..." : searchs.name}
                        </div>
                        <div className='Undercover_container5'>
                            <div><p>Frequently Asked <br /> Questions </p></div>
                            <div className='Undercover_container6'>
                                <img src="/Ellipse 2.svg" alt="ellipse 2" />
                                <img src="/Ellipse 3.svg" alt="ellipse 3" />
                                <img src="/Ellipse 4.svg" alt="ellipse 4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grams'>FAQ</div>
                </div>
                <div className='faqcont'>
                    {siloading ? (
                        <Skeleton />
                    ) : (
                        <>
                            <div className='faqques' style={{ display: "flex", gap: "6vw" }}>
                                {faqs.question}
                                <div onClick={handletoglr}>
                                    {!show ? (
                                        <IoMdArrowDropup onClick={handletoglr} style={{ fontSize: "6vw" }} />
                                    ) : (
                                        <IoMdArrowDropdown onClick={handletoglr} style={{ fontSize: "6vw" }} />
                                    )}
                                </div>
                            </div>
                            {show && (
                                <motion.div
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0 }, y: 0 }}
                                    className='faqans'
                                >
                                    {faqs.answer}
                                </motion.div>
                            )}
                        </>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};
