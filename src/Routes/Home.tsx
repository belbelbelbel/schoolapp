import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { motion, useAnimation } from "framer-motion";

const Home = () => {
    const [showLogo, setShowLogo] = useState(true);
    const history = useNavigate();
    const animationControls = useAnimation();

    const buttonVariants = {
        rest: {
            y: 0, // Set initial y position
        },
        pressed: {
            y: -50, // Move the button up 50px on click
            transition: { duration: 0.1 }, // Define animation duration
        },
        transitionUp: {
            y: -100, // Move the button up 100px smoothly
            transition: { duration: 0.5 }, // Define animation duration
        },
    };

    const handleClick = () => {
        animationControls.start("pressed");
        setTimeout(() => {
            animationControls.start("transitionUp");
        }, 100); // Start the transition up animation after a short delay
    };

    const handleAnimationComplete = () => {
        history("/signup");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 5000); // Set a longer timeout for the loader to show

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
            {showLogo ? (
                <Loader />
            ) : (
                <div className="home_container" style={{ backgroundImage: "url('be8e418654942968e0419c56f0c102a4.jpeg')" }}>
                    <div className='home_container2'>
                        <div>
                            <motion.button
                                className='signupbtn'
                                variants={buttonVariants}
                                initial="rest"
                                animate={animationControls}
                                onClick={handleClick}
                                onAnimationComplete={handleAnimationComplete}
                            >
                                Sign up
                            </motion.button>
                        </div>
                        <div>
                            <Link to="/Signin">
                                <button className='signinbtn'>Sign in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Home;
