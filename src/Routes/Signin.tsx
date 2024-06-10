import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Provider/Usecontext';
import { motion } from 'framer-motion';
import '../Styles/Signin.css';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie"
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
const Signin = () => {
  const locations = useLocation();
  const navigate = useNavigate();
  const user = useContext(Context);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [Isloading, setIsLoading] = useState<boolean>(false)
  const [show, setShow] = useState(false);
  const [temperror, settemperror] = useState("")
  const [error, seterror] = useState(false);
  const [tokes, settokes] = useState("")
  // 2569719635
  const handleclick = () => {
    setShow((prevShow) => !prevShow);
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/preschool")
    }
    else {
      navigate("/signin")
    }
  }, [user?.isLoggedIn, navigate])
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
      console.log(result.token)
      settokes(result.token)
      // Cookies.set('token', result.token,{expires:1})
      localStorage.setItem('token', result.token)
      if (!res.ok) {
        seterror(result.message)
        throw new Error("error fetching user signin")
      }
      if (localStorage.getItem('token')) {
        navigate('/school');
      }
      else {
        navigate('/signin');
      }
    } catch (error) {
      if (!formdata?.email.trim()) {
        validateerror.push('The email is equired');
      }
      else if (!/\S+@\S+\.\S+/.test(formdata?.email)) {
        validateerror.push('The email is not orrect');
      }
      if (!formdata?.password.trim()) {
        validateerror.push('the password is equired');
      } else if (formdata?.password.length < 8) {
        validateerror.push('the password is complete');
      }
      user?.seterror(validateerror);
      settemperror("Failed to signup : Privacy CORS error")
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
    passworderror = <div className="errors"> Password should be at least 8 characters</div>;
  }
  //   useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/preschool");
  //   }
  // },);
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
          <img src="Picture.png" alt="fae" />
        </div>
        <div className='signin_container2'>
          <form onSubmit={handleSubmit}>
            {!Isloading && (
              <div className="errors" style={{ textAlign: "center" }}>{error}</div>
            )}
            
              {!Isloading && (
                <div className="errors" style={{ textAlign: "center" }}>{temperror}</div>
              )}
            
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
                    disabled={Isloading}

                    initial="initial"
                    animate="animate">
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", gap: "2vw" }}>
                      {Isloading && <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><ClipLoader
                        color="#ffff"
                        cssOverride={{}}
                        size={19}
                        speedMultiplier={1.2}
                      />
                      </div>}
                      Sign in
                    </div>
                  </motion.button>
                  <div className="btn-div"><Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </div>
                <div className='btn-div2'>Don't have an account?<span><Link to='/signup'>Sign Up</Link></span> </div>
              </div>
              <div><Link to="/verification">otp page</Link></div>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;

