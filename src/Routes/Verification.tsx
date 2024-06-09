import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Context } from "../Provider/Usecontext";
import "../Styles/Verification.css";
import { IoMdArrowRoundBack } from "react-icons/io";
let currentOtp: number = 0;

export const Verification = () => {
    const user = useContext(Context);
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeOtp, setactiveOtp] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [show, setshow] = useState(false);
    const [mail, setmail] = useState("");
    const [error, seterror] = useState("");
    const [check, setcheck] = useState(false);
    const [loading, setloading] = useState(false);
    const [buttons, setbuttons] = useState(false);
    const locations = useLocation();

    const handlOnchanege = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const val = value.substring(value.length - 1);
        const newOtp = [...otp];
        newOtp[currentOtp] = val;
        setOtp(newOtp);
        if (!value) {
            setactiveOtp(currentOtp - 1);
        } else {
            setactiveOtp(currentOtp + 1);
        }
    };

    const data = locations.state?.data;
    console.log(data);

    const handleverification = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setloading(true);
        try {
            const res = await fetch("https://sabo-app.onrender.com/auth/verify-email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: data.email, otp: otp.join('') })
            });
            const result = await res.json();
            console.log(result);
            seterror(result);
            if (!res.ok) {
                setcheck(true);
                setbuttons(true);
                throw new Error("error parsing json");
            } else {
                setshow(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        if (data?.email) {
            const atIndex = data.email.indexOf('@') ?? -1;
            const visibleChars = Math.min(4, atIndex);
            const maskedLocalPart = data.email.slice(0, visibleChars) + '*'.repeat(atIndex - visibleChars) + data.email.slice(atIndex);
            console.log(maskedLocalPart);
            setmail(maskedLocalPart);
        } else {
            console.log('Email not available in data');
        }
    }, [data]);

    const handleOnkey = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const { key } = e;
        currentOtp = index;
        if (key === "Backspace") {
            setactiveOtp(currentOtp - 1);
        }
        console.log(key);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOtp]);

    const handleGoback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const otpEntered = otp.filter((item) => item !== "").length;
        const opt = otp.join(", ").length !== 0;
        if (otpEntered < 4) {
            setcheck(false);
        }
        if (otpEntered < 4) {
            setbuttons(false);
        } else if (otpEntered === otp.length) {
            setbuttons(true);
        }
    }, [otp]);

    return (
        <div className="verification-wrapper">
            <motion.div className="verification-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                exit={{ opacity: 0 }}>
                <div className="verification-header">
                    <div className="back-button" onClick={handleGoback}>
                        <IoMdArrowRoundBack />
                    </div>
                    <div>
                        <div className="verification-title"></div>
                    </div>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",flexDirection:"column",marginTop:"0vw"}}>
                    <div className="verification-subtitle">
                        <div className="">
                            <h2 style={{ color: "black" }}>Enter 4 Digits Code</h2>
                            <div style={{ color: "black" }} >Enter the 4 digit codes that you recieved in your Gmail</div>
                        </div>
                       
                    </div>
                    <div>
                        <form className="verification-form" onSubmit={handleverification}>
                            <div className="verification-inputs">
                                <div className="input-container">
                                    {otp.map((_, index) => {
                                        return (
                                            <div key={index}>
                                                <input
                                                    ref={index === activeOtp ? inputRef : null}
                                                    type="number"
                                                    onChange={handlOnchanege}
                                                    onKeyDown={(e) => handleOnkey(e, index)}
                                                    value={otp[index]}
                                                    className={`verification-input ${check ? 'verification-input-border-error' : ''}`}
                                                />
                                                {index === otp.length ? null : (
                                                    <span className="w-2 py-0.5 bg-gray-400" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div>
                                    {check && (
                                        <div className="flex justify-start items-center absolute">
                                            <img src="/assets/images/Group 289738.svg" alt="Error" />
                                        </div>
                                    )}
                                    <div className="verification-resend" style={{ color: "black" }}>Resend</div>
                                </div>
                            </div>
                            <motion.button
                                whileTap={{ scale: 1.05 }}
                                disabled={loading}
                                type="submit"
                                className={`verification-button ${buttons ? 'verification-button-enabled' : 'verification-button-loading'}`}>
                                {loading ? <div>Sending...</div> : <div>Verify</div>}
                            </motion.button>
                        </form>
                    </div>
                    
                </div>
               
                {/* <Footer /> */}
            </motion.div>
            <div style={{height:"2px",width:"65vw",backgroundColor:'#926151',position:"relative",top:"-6vw"}}></div>
        </div>
    );
}
