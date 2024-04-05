import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react"
import animationData from "../Styles/lottie.json"
const Home = () => {
    const [showLogo, setShowLogo] = useState(true);
    const [signupClicked, setSignupClicked] = useState(false);

    const history = useNavigate();
    const animationControls = useAnimation();


    const handleNavigate = () => {
        animationControls.start({
            opacity: 0,
            y: 30,
            transition: {duration: 0.7, ease: "easeIn"},
        });
    };
    useEffect(() => {
        if (signupClicked) {
            const timer = setTimeout(() => {
                setSignupClicked(false);
            }, 700); 
            return () => clearTimeout(timer);
        }
    }, [signupClicked]);
    const buttonVariants = {
        rest: {
            y: 0,
        },
        pressed: {
            y: 70,
            transition: { duration: 1 },
        },
        transitionUp: {
            y: 100,
            transition: { duration: 0.5 },
        },
    };

    // const handleClick = () => {
    //     animationControls.start("pressed");
    //     setTimeout(() => {
    //         animationControls.start("transitionUp");
    //     }, 100); 
    // };
    const handleSignupClick = () => {
        setSignupClicked(true);
        setTimeout(() => {
            history("/signup");
        }, 700);
    };
    
    const handleAnimationComplete = () => {
        history("/signup");
    };
    const handleAnimationCompletes = () => {
        history("/signin");
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: window.innerWidth, transition: { duration: 0.5 } }}
        >
            {/* {showLogo ? (
                <Loader />
            ) : ( */}
            <div className="home_container">
                <h1>LOGO</h1>
                <div className='home_container2'>
                    <div className='home_container3'>
                            <motion.button className='signinbtn'
                            onClick={handleNavigate}
                            initial={{ opacity: 1, y: 0 }}
                            animate={animationControls}  
                            onAnimationComplete={handleAnimationCompletes}              
                            >Sign in</motion.button>
                    </div>
                    <div>
                        <motion.button
                            className={signupClicked ? 'signupbtn animate' : 'signupbtn'}
                            // variants={buttonVariants}
                            // initial="rest"
                            // animate={animationControls}
                            onClick={handleSignupClick}
                            onAnimationComplete={handleAnimationComplete}
                        >
                            Sign up
                        </motion.button>
                    </div>

                </div>
            </div>
            {/* )} */}
        </motion.div>
    );
};

export default Home;
