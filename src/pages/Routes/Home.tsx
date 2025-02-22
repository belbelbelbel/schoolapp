import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "../../Styles/Home.css";
import Loader from '../components/Loader';

const Home = () => {
    const navigate = useNavigate();
    const [showLogo, setShowLogo] = useState(true);
    const [signupClicked, setSignupClicked] = useState(false);
    
    const signinAnimationControls = useAnimation();
    const signupAnimationControls = useAnimation();

    useEffect(() => {
        navigate("/");
    }, []);

    useEffect(() => {
        if (signupClicked) {
            const timer = setTimeout(() => setSignupClicked(false), 700);
            return () => clearTimeout(timer);
        }
    }, [signupClicked]);

    useEffect(() => {
        const timer = setTimeout(() => setShowLogo(false), 5500);
        return () => clearTimeout(timer);
    }, []);

    const handleSigninNavigate = () => {
        signinAnimationControls.start({ opacity: 0, y: 30, transition: { duration: 1, ease: "easeIn" } });
    };
    
    const handleSignupNavigate = () => {
        signupAnimationControls.start({ opacity: 0, y: -30, transition: { duration: 1, ease: "easeOut" } });
    };
    const handleAnimationComplete = () => navigate("/signup", { state: { showstyle: { y: "-45vh" } } });
    
    const handleAnimationCompletes = () => navigate("/signin", { state: { showstyle: { y: "-45vh" } } });
    
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: window.innerWidth, transition: { duration: 0.5 } }}>
            {showLogo ? (
                <Loader />
            ) : (
                <div className="home_container">
                    <div className="home_container8">
                        <h1><img src="/logoctf.jpg" alt="logo" width="0vw" /></h1>
                        <div className="home_container2">
                            <div className="home_container4">
                                <div className="home_container3">
                                    <motion.button className="signinbtn" onClick={handleSigninNavigate} animate={signinAnimationControls} onAnimationComplete={handleAnimationCompletes}>
                                        Sign in
                                    </motion.button>
                                </div>
                                <div>
                                    <motion.button className={`signupbtn ${signupClicked ? "animate" : ""}`} onClick={handleSignupNavigate} animate={signupAnimationControls} onAnimationComplete={handleAnimationComplete}>
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

export default Home;
