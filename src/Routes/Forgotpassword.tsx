import React, { ChangeEvent, useContext } from 'react';
import { Context } from '../Provider/Usecontext';
import { useNavigate } from 'react-router-dom';
import "../Styles/Forgotpassword.css";
import { motion, useAnimation } from "framer-motion";
type Props = {}
const Forgotpassword = (props: Props) => {
    const location = useNavigate();
    const user = useContext(Context);
    let emailerror: React.ReactNode = '';
    if (user?.error.includes('The email is required')) {
        emailerror = <div className="error">Your Email Is Required</div>;
    } else if (user?.error.includes('The email is not correct')) {
        emailerror = <div className="error"> Please enter a valid email</div>;
    }
    function handleOnchange(event: ChangeEvent<HTMLInputElement>): void {
        const { value, name } = event.target;
        user?.setformdata({
            ...user.formdata,
            [name]: value,
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        let validateerror: string[] = [];
        e.preventDefault();
        if (!user || !user.formdata) return;
        if (!user.formdata.email.trim()) {
            validateerror.push('The email is required');
        } else if (!/\S+@\S+\.\S+/.test(user.formdata.email)) {
            validateerror.push('The email is not correct');
        }
        if (validateerror.length === 0) {
            location('/review');
        }
        user.seterror(validateerror);
    };
    return (
        <motion.div className="forgot-password-container"
        initial={{opacity : 0}}
        animate={{opacity :1 , transition: {duration : 1.5}}}
        exit={{opacity : 0, transition: {duration : 1}}}>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="form-container2">
                    <div className="form-container3">
                        <img src="forgot-password-concept-illustration_114360-1095.avif" alt="grfjk" />
                    </div>
                 <div className="surname-emails">
                    <input placeholder="Email" onChange={handleOnchange} name="email" type="text" />
                    {emailerror}
                 </div>
                 <button type='submit'  className='signin_btns'>Proceed</button>
                </div>
            </form>
            {/* <div className="lottie-background">
                <Lottie animationData={animationData} />
            </div> */}
        </motion.div>
    )
}
export default Forgotpassword;
// import { Link, useNavigate } from 'react-router-dom';
// import "../Styles/Home.css";
// import React, { useEffect, useState } from 'react';
// import Loader from './Loader';
// import { motion, useAnimation } from "framer-motion";
// import Lottie from "lottie-react"
// import animationData from "../Styles/lottie.json"

// const Home = () => {
//     const [showLogo, setShowLogo] = useState(true);
//     const [signupClicked, setSignupClicked] = useState(false);

//     const history = useNavigate();
//     const animationControls = useAnimation();

//     const handleNavigate = async () => {
//         await animationControls.start({
//             opacity: 0,
//             y: 30,
//             transition: { duration: 0.7, ease: "easeIn" },
//         });
//         history("/signin");
//     };

//     useEffect(() => {
//         if (signupClicked) {
//             const timer = setTimeout(() => {
//                 setSignupClicked(false);
//             }, 700); 
//             return () => clearTimeout(timer);
//         }
//     }, [signupClicked]);

//     const buttonVariants = {
//         rest: {
//             y: 0,
//         },
//         pressed: {
//             y: 70,
//             transition: { duration: 1 },
//         },
//         transitionUp: {
//             y: 100,
//             transition: { duration: 0.5 },
//         },
//     };

//     const handleSignupClick = () => {
//         setSignupClicked(true);
//         setTimeout(() => {
//             history("/signup");
//         }, 700);
//     };
    
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowLogo(false);
//         }, 5000);

//         return () => {
//             clearTimeout(timer);
//         };
//     }, []);

//     return (
//         <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "100%" }}
//             exit={{ width: window.innerWidth, transition: { duration: 0.5 } }}
//         >
//             <div className="home_container">
//                 <h1>LOGO</h1>
//                 <div className='home_container2'>
//                     <div className='home_container3'>
//                         <motion.button 
//                             className='signinbtn'
//                             onClick={handleNavigate}
//                             initial={{ opacity: 1, y: 0 }}
//                             animate={animationControls}
//                         >
//                             Sign in
//                         </motion.button>
//                     </div>
//                     <div>
//                         <motion.button
//                             className={signupClicked ? 'signupbtn animate' : 'signupbtn'}
//                             variants={buttonVariants}
//                             initial="rest"
//                             animate={animationControls}
//                             onClick={handleSignupClick}
//                         >
//                             Sign up
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Home;
