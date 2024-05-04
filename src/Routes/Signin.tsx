import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Corrected import
import { Context } from '../Provider/Usecontext';
import { motion } from 'framer-motion';
import '../Styles/Signin.css';
import Lottie from "lottie-react";
import animatedData from "../Styles/D0cWBC6ZWu.json"
import { Link } from 'react-router-dom';
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
  const locations = useLocation();
  const navigate = useNavigate();
  const user = useContext(Context);
  const [show, setShow] = useState(false);
  const handleclick = () => {
    setShow((prevShow) => !prevShow);
  };
  const [Isloading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    console.log("this is location", locations)
  }, [locations])
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    user?.setformdata({
      ...user.formdata,
      [name]: value,
    });
  };
  let validateerror: string[] = [];
  const { formdata } = user || {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const { email, password } = formdata || {}
      const res = await fetch("https://almaquin-rua7.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(
          {
            email,
            password
          }
        )
      })
      const result = await res.json()
      console.log(result)
      toast.error(result.message)
      if (!res.ok) {
        throw new Error("error fetching user signin")
      }
      toast.success("👍 Signin Successful");
      navigate('/preschool');
    } catch (error) {
      if (!formdata?.email.trim()) {
        validateerror.push('The email is required');
      }
      else if (!/\S+@\S+\.\S+/.test(formdata?.email)) {
        validateerror.push('The email is not correct');
      }
      if (!formdata?.password.trim()) {
        validateerror.push('the password is required');
      } else if (formdata?.password.length < 6) {
        validateerror.push('the password is incomplete');
      }
      user?.seterror(validateerror);
      console.log("error occured", error);
    } finally {
      setIsLoading(false);
    }
  }
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
        ease: "easeOut",
      },
      opacity: 1
    },
  };
  let emailerrors: React.ReactNode = '';
  if (user?.error.includes('The email is required')) {
    emailerrors = <div className="errors"> Email Is Required</div>;
  } else if (user?.error.includes('The email is not correct')) {
    emailerrors = <div className="errors">Please enter a valid email</div>;
  }

  let passworderror: React.ReactNode = '';
  if (user?.error.includes('the password is required')) {
    passworderror = <div className="errors"> Password Is Required</div>;
  } else if (user?.error.includes('the password is incomplete')) {
    passworderror = <div className="errors"> Password Is Incomplete</div>;
  }

  return (
    <motion.div
      className="signin"
      initial={{ opacity: 0 }}
      animate={{
        transition: {
          duration: 1.5,
          delay: 0,
          ease: "easeIn",
        },
        opacity: 1
      }}
      exit={{ opacity: 0 }}>
      <div className='signin_container'>
        <div className='signin-img'>
          <img src="Empty street-bro (1) 1.svg" alt="fae" />
        </div>
        <div className='signin_container2'>
          <form onSubmit={handleSubmit}>
            <div className='surname_container'>
              <div className="surname-email">
                <input placeholder="Email" onChange={handleOnchange} name="email" type="text" />
                {emailerrors}
              </div>
              <div className='surname-cont'>
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

              <div className="btn">
                <div className='bt'>
                  <motion.button type="submit" className="signin_btn"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate="animate">
                    {Isloading ? <div style={{ width: "" }}><Lottie animationData={animatedData} style={{ width: "5vw" }}></Lottie></div> : " Sign in"}
                  </motion.button>
                  <div className="btn-div"><Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </div>
                <div className='btn-div2'>Don't have an account?<span><Link to='/signup'>Sign Up</Link></span> </div>
              </div>
            </div>
            <ToastContainer />

          </form>

        </div>
      </div>
    </motion.div>
  );
};

export default Signin;

