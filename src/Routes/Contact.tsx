import React, { useEffect, useState } from 'react';
import "../Styles/Contact.css";
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { Footer } from './Footer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { valueprops } from '../Provider/Usecontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sidebar } from './Sidebar';
import Cookies from 'js-cookie';
import { Skeleton } from './Skeleton';
interface textprops {
    name: string;
    email: string;
    message: string;
}

export const Contact = () => {
    const accesstokena = Cookies.get('token')
    const params = useParams();
    const [searchs, setsearchs] = useState({ name: "" });
    const [error, seterror] = useState()
    const [loadingContact, setLoadingContact] = useState(true);
    const [loading, setloading] = useState(false)
    const [cont, setcont] = useState({ phone: "", email: "" })
    const navigate = useNavigate();

    const handlenavigateunder = () => {
        navigate(`${params.universityid}/underfaq`);
    };
    const scrollastold = (sectionid: string) => {
        const section = document.getElementById(sectionid);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const [shownavbar, setshownavbar] = useState(false)
    const handleshow = () => {
        setshownavbar(!shownavbar)
    }
    useEffect(() => {
        const handlecontact = async () => {
            const res = await fetch("https://almaquin.onrender.com/api/contact", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${accesstokena}`,
                },
            });
            const result = await res.json();
            console.log(result);
            setcont(result)
            setLoadingContact(false);
        };
        handlecontact();
    }, [accesstokena]);
    
    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
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
    }, [params.universityid, accesstokena]);
    return (
        <motion.div className='Contact'
            initial={{ opacity: 0 }}
            animate={{
                transition: {
                    duration: 1,
                    delay: 0,
                    ease: "easeIn",
                },
                opacity: 1
            }}
            exit={{ opacity: 0 }}>
            <div id="firsts"></div>
            <div className="Contact_container">
                <div className='Contact_containera'>
                    {
                        !shownavbar ? <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" onClick={handleshow} /></div> : <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" onClick={handleshow} /></div>
                    }
                </div>
                {
                    shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
                }
                <div className="Contact_containerb">
                    <div> <img src="/edit button.svg" alt="wearfs" /></div>
                    <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "0rem auto", position: "relative", left: "3.7vw" }}>
                <div style={{fontSize:"5.5vw"}}>
                    {loading ? "loading..." : searchs.name}
                </div>
                <div className='Undercover_container5'>
                    <div><p>QUICK CONTACT <br />& FAQS</p></div>
                    <div className='Undercover_container6'>
                        <img src="/Ellipse 2.svg" alt="ellipse 2" />
                        <img src="/Ellipse 3.svg" alt="ellipse 3" />
                        <img src="/Ellipse 4.svg" alt="ellipse 4" />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3rem" }}>
                <div>
                    <div className='grams' style={{ position: "relative", left: "-28vw" }}>Contacts</div>
                </div>
                <div className='faqco'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        {loadingContact ? (
                            <>
                                <Skeleton />
                            </>
                        ) : (
                            <>
                                <div style={{ display: "flex", alignItems: 'center', gap: "2rem" }}><div style={{ fontWeight: "600", fontSize: "4vw" }}>Phone:-</div>  <div>{cont.phone}</div></div>
                                <div style={{ display: "flex", alignItems: 'center', gap: "2rem" }}><div style={{ fontWeight: "600", fontSize: "4vw" }}>Email :-</div> <div>{cont.email}</div></div>
                            </>
                        )}
                    </div>
                </div>

            </div>
            <div style={{ marginTop: "3rem" }}>
                <div>
                    <div className='grams' style={{ position: "relative", left: "-32vw" }}> FAQS</div>
                </div>
                <div className="Contact_contentf">
                    <div className="Covenant_imgs1">
                        <div><h2>Undergraduate</h2></div>
                        <div className="imis" onClick={handlenavigateunder}><div className="imis" ><h3>FAQs  </h3><div className="imi2s"> <img src="/Arrow (1).svg" alt="dfDF" width="22vw" /></div></div></div>
                    </div>
                    <div className="Covenant_imgs1">
                        <div><h2>Postgraduate</h2></div>
                        <div className="imis" onClick={handlenavigateunder}><div className="imis" ><h3>FAQs  </h3><div className="imi2s"> <img src="/Arrow (1).svg" alt="dfDF" width="22vw" /></div></div></div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </motion.div>
    )
}
