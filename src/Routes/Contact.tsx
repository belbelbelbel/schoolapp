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
interface textprops {
    name: string;
    email: string;
    message: string;
}

export const Contact = () => {
    const accesstoken = localStorage.getItem('token');
    const accesstokena =  Cookies.get('token')
    const params = useParams();
    const [error, seterror] = useState()
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
        };
        handlecontact();
    }, [accesstoken]);
    const handlepostcontact = async (data: textprops) => {
        setloading(true)
        try {
            const res = await fetch("https://almaquin.onrender.com/api/send-a-message", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${accesstoken}`,
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            seterror(result.message)
            if (result.message === "Message sent successfully") {
                toast.success(result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        finally {
            setloading(false)
        }
    };
    const { register, handleSubmit, formState: { errors } } = useForm<valueprops>();
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        console.log(data);
        handlepostcontact(data);
    };
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
            <div className='Contact_header'>Contacts & FAQs
                <div className='Contact_img'><img src="/Work_7 1.svg" alt="" /></div>
            </div>
            <div className='Contact_content'>
                <div className='Contact_contenta'>Call Us</div>
                <div className='Contact_contenta'>Email Us</div>
                <div className='Contact_contenta'>Fax Us</div>
            </div>
            <div className='Contact_contentb'>QUICK CONTACT</div>
            <div className='Contact_contentd'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='Contact_contentc'>
                        <div> <label>Name</label><span>*</span></div>
                        <input
                            {...register("name", {
                                required: "Name is required"
                            })}
                            placeholder='Enter your name' type='text' />

                    </div>
                    {errors.name && <div className="errs">{errors.name.message}</div>}
                    <div className='Contact_contentc'>
                        <div> <label>Email</label><span>*</span></div>
                        <input
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Fill in a correct email address",
                                },
                            })}
                            placeholder='Enter email address here' type='email' />

                    </div>
                    {errors.email && <div className="errs">{errors.email.message}</div>}
                    <div className='Contact_contente'>
                        <div>
                            <label>Message</label><span>*</span>
                        </div>
                        <textarea placeholder='Enter your message here'
                            {...register('message', {
                                required: "Message is required",
                            })}
                            rows={4}
                            cols = {50}
                        />
                    </div>
                    {errors.message && <div className="errs">{errors.message.message}</div>}
                    <div className="btn" style={{ position: "relative", top: "-2rem" }}>
                        <button type='submit'
                            disabled={loading}
                            className="signin_btn" style={{ padding: "0 1rem", position: "relative", top: "1rem" }}>
                            {
                                loading ? "submiting..." : "submit"
                            }

                        </button>
                    </div>
                </form>
                <div className='Contact_headera'>FAQs
                </div>
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
            <div className='faqco'>
                <div className='Contact_contentbc' >OUR  CONTACT</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: 'center', gap: "2rem" }}><div style={{ fontWeight: "600", fontSize: "4vw" }}>Phone:-</div>  <div>{cont.phone}</div></div>

                    <div style={{ display: "flex", alignItems: 'center', gap: "2rem" }}><div style={{ fontWeight: "600", fontSize: "4vw" }}>Email :-</div> <div>{cont.email}</div></div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </motion.div>
    )
}
