import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Provider/Usecontext';
import { motion } from 'framer-motion';
import '../Styles/Signin.css';
import { Link } from 'react-router-dom';
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";

const Signin = () => {
  const location = useNavigate();
  const user = useContext(Context);
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    user?.setformdata({
      ...user.formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let validateerror: string[] = [];
    e.preventDefault();
    if (!user || !user.formdata) return;

    if (!user.formdata.email.trim()) {
      validateerror.push('The email is required');
    } else if (!/\S+@\S+\.\S+/.test(user.formdata.email)) {
      validateerror.push('The email is not correct');
    }
    if (!user.formdata.password.trim()) {
      validateerror.push('the password is required');
    } else if (user.formdata.password.length < 6) {
      validateerror.push('the password is incomplete');
    }
    if (validateerror.length === 0) {
      location('/school');
    }
    user.seterror(validateerror);
  };
  const buttonVariants = {
    initial: {
      y: "-10vh",
      opacity: 1
    },
    animate: {
      y: "0%",
      transition: {
        duration: 1,
        delay: 0,
        ease: "easeIn",
      },
      opacity: 1
    },
  };
  let emailerror: React.ReactNode = '';
  if (user?.error.includes('The email is required')) {
    emailerror = <div className="error">Your Email Is Required</div>;
  } else if (user?.error.includes('The email is not correct')) {
    emailerror = <div className="error">Your Email Is Not Correct</div>;
  }

  let passworderror: React.ReactNode = '';
  if (user?.error.includes('the password is required')) {
    passworderror = <div className="error">Your Password Is Required</div>;
  } else if (user?.error.includes('the password is incomplete')) {
    passworderror = <div className="error">Your Password Is Incomplete</div>;
  }

  return (
    <motion.div
      className="signin"
      initial={{opacity:0}}
      animate={{
        transition: {
          duration: 2,
          delay: 0,
          ease: "easeIn",
        },
        opacity: 1
      }}
      exit={{ opacity: 0 }}>
      <div className='signin_container'>
        <div className='signin-img'>
          <img src="Empty street-bro (1) 1.svg" alt="" />
        </div>
        <div className='signin_container2'>
          <form onSubmit={handleSubmit}>
            <div className='surname_container'>
              <div className="surname-email">
                <input placeholder="Email" onChange={handleOnchange} name="email" type="email" />
                {emailerror}
              </div>
              <div>
                <div className="surname-password">
                  <input
                    placeholder="Password"
                    name="password"
                    type={show ? 'text' : 'password'}
                    onChange={handleOnchange}
                  />
                  {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
                </div>
                {passworderror}
              </div>
            </div>
            <div className="btn">
              <motion.button type="submit" className="signin_btn"
                variants={buttonVariants}
                initial="initial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate="animate">
                Sign in
              </motion.button>
              <div className="btn-div"><Link to="/forgotpassword">Forgot Password</Link>
              </div>
              <div className='btn-div2'>Don't have an account?<span><Link to='/signup'>Sign Up</Link></span> </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
