import React from 'react';
import "../Styles/About.css";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { BiArrowBack } from 'react-icons/bi';

export const About = () => {
    const navigate = useNavigate();

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
            className='pt-[1.3rem] h-[100dvh] flex flex-col justify-between'
        >
            <div className=''>
                <div id="firsts"></div>
                <div style={{ display: "flex",  alignItems: "center",padding: "0vw 6vw" }}>
                    <div className="flex justify-between w-full items-center">
                        <div style={{ cursor: "pointer" }}></div>
                        <div style={{ width: "75vw" }}>
                            <BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} />
                        </div>
                    </div>

                    <div className="flex items-center gap-[5vw]">
                        <div><img src="/edit button.svg" alt="edit" /></div>
                        <div><img src="/Vector (4).svg" alt="vector" /></div>
                    </div>
                </div>

                <div style={{ width: "88%", margin: "1rem auto" }} className='pt-[1.3rem]'>
                    <div style={{ margin: "1rem auto", fontWeight: "500", display: "flex", gap: "2rem" }}>
                        <p style={{ fontFamily: "revert", fontSize: "4vw", display: "flex", flexDirection: "column", gap: "1.4em" }}>
                            <div style={{ fontFamily: "sans-serif", fontSize: "4.5vw", fontWeight: "600" }}>
                                Welcome to CTF (Christian Foundation)!
                            </div>
                            <div>
                                At CTF (Christian Foundation), we are dedicated to helping high school graduates easily navigate the path to higher education. Our platform simplifies the research process, allowing you to access information about various schools and their programs with ease.
                            </div>
                            <div>
                                Whether you are looking for a specific school or interested in exploring different programs, our user-friendly interface enables you to search by school name, making your journey to find the right educational fit straightforward and efficient.
                            </div>
                            <div>
                                CTF (Christian Foundation) is committed to empowering students in their pursuit of knowledge and growth. We strive to provide a comprehensive resource that streamlines the school selection process, ensuring that you have the information you need to make informed decisions about your future.
                            </div>
                            <div>
                                Join us at CTF (Christian Foundation) and embark on a journey towards academic success and personal development. We are here to support you every step of the way!
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {/* <Footer/> */}
            </div>
        </motion.div>
    );
};
