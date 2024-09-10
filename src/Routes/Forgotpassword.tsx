import React, { ChangeEvent, useContext, useState } from 'react';
import { Context, valueprops } from '../Provider/Usecontext';
import { useNavigate } from 'react-router-dom';
import "../Styles/Forgotpassword.css";
import { motion, useAnimation } from "framer-motion";
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdArrowBack } from "react-icons/io";

import { relative } from 'path';
import { ComfirmModal } from './ComfirmModal';
type emailprops = {
    email: string
}
const Forgotpassword = () => {
    const navigate = useNavigate();
    const user = useContext(Context);
    const [error, seterror] = useState("")
    const [isloading, setisloading] = useState(false)
    const [show, setshow] = useState(false)
    const handleforgot = async (data: emailprops) => {
        setisloading(true)
        try {
            const res = await fetch('https://almaquin.onrender.com/api/forgot-password', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            // console.log(result);


            if (!res.ok) {
                
                console.error("Error:", result.message);
                if (result.message === "User not found") {
                    seterror("User not found")
                }
                // throw new Error("Error occurred while recovering password from server");
            
            }
            else {
                // navigate("/reset-password", { state: { data } });
                setshow(true)

            }
        } catch (error: any) {
            console.error(error.message);
        }
        finally {
            setisloading(false)
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm<valueprops>()
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        // console.log(data);
        handleforgot(data)
    };
    let emailerror: React.ReactNode = '';
    if (user?.error.includes('The email is requireds')) {
        emailerror = <div className="errors"> Email Is Required</div>;
    } else if (user?.error.includes('The email is not corrects')) {
        emailerror = <div className="errors"> Please enter a valid email</div>;
    }

    return (
        <motion.div className="forgot-password-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}>
            <div>
                <div><IoMdArrowBack size="6.5vw" onClick={() => navigate(-1)} /></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                <div className="form-container2">
                    <div className='' style={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
                        <div>
                            <div className='' style={{ fontSize: "8vw", fontWeight: "600" }}>Forgot Password ?</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ position: "relative", top: "4vw" }}>
                            <div style={{ fontSize: "3.5vw", fontWeight: "500" }}>Enter Your Email Address</div>
                        </div>
                        <div className="surna-emails">
                            <input placeholder="Email"
                                // autoFocus
                                {...register('email', {
                                    required: "  Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Fill in a correct email address",
                                    },
                                })}
                                type="text" />
                        </div>
                        <div style={{ position: 'relative', top: "-5vw" }}>
                            {errors.email && <div className="forgot_error">{errors.email.message}</div>}
                        </div>
                    </div>
                    {!isloading && (
                        <div className="flex justify-start items-center absolute" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "-2vw", gap: "0vw" }}>
                            <div style={{ fontFamily: "monospace", fontSize: "4vw", color: "red", margin: "1vw auto", position: "absolute" }}>{error}</div>
                        </div>
                    )}
                    <button type='submit' className='forgot_btns'>
                        {
                            isloading ? "Sending..." : "Send recovery OTP "
                        }
                    </button>
                </div>
            </form>
            {/* <div className="lottie-background">
                <Lottie animationData={animationData} />
            </div> */}
            <div>
                {
                    show && <ComfirmModal setshow={setshow} />
                }
            </div>
        </motion.div>
    )
}
export default Forgotpassword;
