import React, { useEffect, useState } from 'react'
import { valueprops } from '../Provider/Usecontext';
import { SubmitHandler, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Sidebar } from './Sidebar';
import { motion } from 'framer-motion';
import { Footer } from './Footer';
interface textprops {
    name: string;
    email: string;
    message: string;
}
export const ContactUs = () => {
    const accesstoken = localStorage.getItem('token');

    const accesstokena = Cookies.get('token')
    const params = useParams();
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false)
    const [cont, setcont] = useState({ phone: "", email: "" })
    const navigate = useNavigate();
    const [shownavbar, setshownavbar] = useState(false)
    const handleshow = () => {
        setshownavbar(!shownavbar)
    }

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

            if (!res.ok) {
                // throw new Error("error parsing json");
            }
            else {
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
                    // seterror(true)
                }
            }
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
        finally {
            setloading(false)
        }
    };
    const { register, handleSubmit, formState: { errors } } = useForm<valueprops>();
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        // console.log(data);
        handlepostcontact(data);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                transition: {
                    duration: 1,
                    delay: 0,
                    ease: "easeIn",
                },
                opacity: 1
            }}
            exit={{ opacity: 0 }}
            className='Contact h-[100dvh] flex flex-col justify-between'>
            <div>
                <div id="firsts"></div>

                <div className="Contact_container">
                    <div className='Contact_containera'>
                        {
                            !shownavbar ? <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div> : <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div>
                        }
                    </div>
                    {
                        shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
                    }
                    <div className="Contact_containerb">
                        <div> <img src="/edit button.svg" alt="edit" /></div>
                        <div> <img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='Contact_header'>
                    <div className='Contact_img'><img src="/Work_7 1.svg" alt="contact image" /></div>
                </div>
                {/* <div className='Contact_content'>
                    <div className='Contact_contenta'>Call Us</div>
                    <div className='Contact_contenta'>Email Us</div>
                    <div className='Contact_contenta'>Fax Us</div>
                </div> */}
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
                                cols={50}
                            />
                        </div>
                        {!loading && <div className="" style={{ textAlign: "center", margin: "1vw", color: "green" }}>{error}</div>}
                        <div className="btn" style={{ position: "relative", top: "-2rem" }}>
                            <button type='submit'
                                disabled={loading}
                                className="signin_btn" style={{ padding: "0 1rem", position: "relative", top: "1rem" }}>
                                {
                                    loading ? "Sending..." : "Submit"
                                }

                            </button>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </motion.div>
    )
}
