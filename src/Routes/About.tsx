import React from 'react'
import "../Styles/About.css"
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import {motion} from "framer-motion"
export const About = () => {
    const navigate = useNavigate();
    const handlelback = () => {
        navigate(-1);
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
        exit={{ opacity: 0 }}>
            <div>
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
                        <h3 style={{ fontWeight: "600" }}>
                            ABOUT US
                        </h3>
                        <div className='Undercover_container5'>
                            <div style={{ width: "80vw" }}><p>OUR MISSION</p></div>
                            <div className='Undercover_container6'>
                                <img src="/Ellipse 2.svg" alt="ellipse 2" />
                                <img src="/Ellipse 3.svg" alt="ellipse 3" />
                                <img src="/Ellipse 4.svg" alt="ellipse 4" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "88%", margin: "1rem auto" }}>
                        {/* <div style={{ textAlign: 'center', margin: "0.5rem auto" }}>  <h3>OUR MISSION</h3></div> */}
                        <div style={{ margin: "1rem auto", fontWeight: "500",display:"flex",gap:"2rem" }}>
                            <p style={{ fontFamily:"revert", fontSize: "4vw",display:"flex",flexDirection:"column",gap:"1.4em" }}>
                                <div style={{ fontFamily: "sans-serif", fontSize: "4.5vw",fontWeight:"600" }}>Welcome to CTF (Christian Foundation)!</div>

                                <div>  At CTF (Christian Foundation), we are dedicated to helping high school graduates easily navigate the path to higher education. Our platform simplifies the research process, allowing you to access information about various schools and their programs with ease.</div>
                                <div>
                                    Whether you are looking for a specific school or interested in exploring different programs, our user-friendly interface enables you to search by school name, making your journey to find the right educational fit straightforward and efficient.</div>
                                <div>            CTF (Christian Foundation) is committed to empowering students in their pursuit of knowledge and growth. We strive to provide a comprehensive resource that streamlines the school selection process, ensuring that you have the information you need to make informed decisions about your future.</div>

                                Join us at CTF (Christian Foundation) and embark on a journey towards academic success and personal development. We are here to support you every step of the way!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
