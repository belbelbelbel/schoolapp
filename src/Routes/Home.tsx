import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react"
import animationData from "../Styles/lottie.json"
const Home = () => {
    const buttonVariants = {
        initial: {
            y: "-45vh",
        },
        animate: {
            y: "0%",
            transition: {
                duration: 1.2,
                delay: 0,
                ease: "easeOut",
            },
        },
    };
    const locations = useLocation()
    const [showLogo, setShowLogo] = useState(true);
    const [showstyle, setshowstyle] = useState(buttonVariants)
    const [signupClicked, setSignupClicked] = useState(false);


    const history = useNavigate();
    const signinAnimationControls = useAnimation();
    const signupAnimationControls = useAnimation();

    useEffect(() => {
        history("/");
    }, []);

    useEffect(() => {
        console.log("this is location", locations)
    }, [locations])
    useEffect(() => {
        if (signupClicked) {
            const timer = setTimeout(() => {
                setSignupClicked(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [signupClicked]);


    // const handleClick = () => {
    //     animationControls.start("pressed");
    //     setTimeout(() => {
    //         animationControls.start("transitionUp");
    //     }, 100); 
    // };
    // const handleSignupClick = () => {
    //     setSignupClicked(true);
    //     setTimeout(() => {
    //         history("/signup?fromHomePage=true");
    //     }, 700);
    // };

    const handleAnimationComplete = () => {
        history("/signup", { state: { showstyle } });
    };
    const handleAnimationCompletes = () => {
        history("/signin", { state: { showstyle } });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 5500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    //  const handleNavigate = () => {
    //     animationControls.start({
    //         opacity: 0,
    //         y: 30,
    //         transition: {duration: 1, ease: "easeOut"},
    //     });
    // };
    const handleSigninNavigate = () => {
        signinAnimationControls.start({
            opacity: 0,
            y: 30,
            transition: { duration: 1, ease: "easeIn" },
        });
    };
    const handleSignupNavigate = () => {
        signupAnimationControls.start({
            opacity: 0,
            y: -30, transition: { duration: 1, ease: "easeOut" },
        });

    };
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: window.innerWidth, transition: { duration: 0.5 } }}
        >
            {showLogo ? (
                <Loader />
            ) : (
                <div className="home_container">
                    <div className="home_container8">
                        <h1><img src="color_logo_transparent.svg" alt="4retrfw" width="100vw" /></h1>
                        <svg>
                            <path></path>
                        </svg>
                        <div className='home_container2'>
                            <div className="home_container4">
                                <div className='home_container3'>
                                    <motion.button className='signinbtn'
                                        onClick={handleSigninNavigate}
                                        initial={{ opacity: 1, y: 0 }}
                                        animate={signinAnimationControls}
                                        onAnimationComplete={handleAnimationCompletes}
                                    >Sign in</motion.button>
                                </div>
                                <div>
                                    <motion.button
                                        className={signupClicked ? "signupbtn animate" : "signupbtn"}
                                        // variants={buttonVariants}
                                        initial={{ opacity: 1, }}
                                        animate={signupAnimationControls}
                                        onClick={handleSignupNavigate}
                                        onAnimationComplete={handleAnimationComplete}
                                    >
                                        Sign up
                                    </motion.button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
export default Home