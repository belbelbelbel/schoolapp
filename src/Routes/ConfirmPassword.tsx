import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom';
import { valueprops } from '../Provider/Usecontext';
import "../Styles/ConfirmPassword.css"
import { motion } from 'framer-motion';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';
interface ConfirmPasswordprops {
    password: string;
    confirmpassword: string;
    token: string | null;
}
export const ConfirmPassword = () => {
    const location  = useLocation()
    const [shows, setShows] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false) 
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const handleresepassword = async (data: ConfirmPasswordprops) => {
        setloading(true)
        try {
            const res = await fetch("https://almaquin.onrender.com/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    // "Authorization": `Bearer ${accesstokena}`,
                },
                body: JSON.stringify(data)
            })
            const result = await res.json();
            console.log(result);
            seterror(result.message)
        } catch (error) {
            console.log(error)

        }
        finally {
            setloading(false)
        }

    }

    const { register, formState: { errors }, handleSubmit, watch } = useForm<valueprops>()
    const onSubmit: SubmitHandler<valueprops> = (data) => {
        console.log(data);
        handleresepassword({
            ...data,
            token
        })
    }
    const handleclicks = () => {
        setShows(!shows)
    }
    const handleclick = () => {
        setShow(!show)
    }

    
    return (
        <div className='conpass'>
            <div style={{ width: "87%", margin: "0rem auto" }}>
                <div><IoMdArrowBack size="6.5vw" onClick={() => navigate(-1)} /></div>
            </div>
            <div style={{ width: "86%", margin: '0vw auto', marginTop: "3rem" }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', gap: "3vw" }}>
                    <div>
                        <div style={{ position: "relative", top: "4vw" }}>
                            <div style={{ fontSize: "3.5vw", fontWeight: "500" }}>Password</div>
                        </div>
                        <motion.div className="forgot-essmails"
                            whileTap="tap">
                            <div className="forgot-emails">
                                <input type={shows ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 22
                                    })}
                                    placeholder='Password'
                                    autoFocus
                                />
                                {shows ? (<PiEyeLight onClick={handleclicks} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclicks} style={{ fontSize: "6vw" }} />)}
                            </div>
                            <div>
                                {
                                    errors.password?.type === "minLength" && <div className="errorss">Password should be at-least 8 characters</div>

                                }
                                {
                                    errors.password?.type === "maxLength" && <div className="errorss">Password must be at-most 22 Characters</div>
                                }
                                {
                                    errors.password?.type === "required" && <div className="errorss">Password is required</div>
                                }
                            </div>
                        </motion.div>
                        <div style={{ position: "relative", top: "4vw" }}>
                            <div style={{ fontSize: "3.5vw", fontWeight: "500" }}>Confirm Password</div>
                        </div>
                        <motion.div className="forgot-essmails"
                            whileTap="tap">
                            <div className="forgot-emails">
                                <input type={show ? "text" : "password"}
                                  
                                    {...register("confirmpassword", {
                                        required: "Confirm your password",
                                        validate: (val: string) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do no match";
                                            }
                                        },
                                    })}
                                    placeholder='Confirm Password'
                                />
                                {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
                            </div>
                            <div>
                                {
                                    errors.confirmpassword && <div className="font-urbanist text-red-400  absolute tracking-[0.2px] text-[3.3vw] m-[0vw] errorss">{errors.confirmpassword.message}</div>
                                }
                            </div>
                        </motion.div>

                    </div>
                    {!loading && (
                        <div className="flex justify-start items-center absolute" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "-2vw", gap: "0vw" }}>
                            <div style={{ fontFamily: "monospace", fontSize: "4vw", color: "red", margin: "1vw auto", position: "absolute" }}>{error}</div>
                        </div>
                    )}
                    <button type='submit' className='forgot_btns'>
                        {
                            loading ? "Sending..." : "Confirm Password"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}