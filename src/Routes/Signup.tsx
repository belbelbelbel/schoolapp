import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Signup.css";
import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Context } from "../Provider/Usecontext";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animatedData from "../Styles/D0cWBC6ZWu.json"
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PresentSchoModal from "./PresentSchoModal";
import { LevelSchool } from "./LevelSchool";
import { ReasonsModal } from "./ReasonsModal";
import { ClipLoader } from "react-spinners";
const Signup = () => {
  const locations = useLocation();
  const [Isloading, setIsLoading] = useState(false)
  const user = useContext(Context);
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);
  const [showsss, setShowsss] = useState(false);
  const [reason, setreason] = useState("")
  const [placeholder, setplaceholder] = useState("")
  const [level, setlevel] = useState("")
  const handleclick = () => {
    setShow((prevShow) => !prevShow);
  };
  const handleclicks = () => {
    setShows((prevShow) => !prevShow);
  };
  const handleclickss = () => {
    setShowss((prevShow) => !prevShow);
  };
  const handleclicksss = () => {
    setShowsss((prevShow) => !prevShow);
  };
  const [previousLocation, setPreviousLocation] = useState<string | null>(null);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const { formdata } = user || {};
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (user) {
      user.setformdata((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      user.seterror([]);
      setFirstName(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(JSON.stringify(formdata))
    try {
      if (user) {
        const res = await fetch("https://almaquin-rua7.onrender.com/api/signup", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            ...user.formdata,
            presentSchool: placeholder,
            classLevel: level,
            reasonForJoining: reason
          }),
        })
        const result = await res.json()
        console.log(result);
        toast.error(result.message)
        if (!res.ok) {
          throw new Error("error fetching user signup")
        }
        toast.success("👍 Signup Successful");
        navigate("/review");
      }
    } catch (error) {
      let validateerror: string[] = [];
      if (!formdata?.surname.trim()) {
        validateerror.push("Your surname is required");
      }
      if (!formdata?.birthday.trim()) {
        validateerror.push("Your Date Of birth Is Required");
      }
      if (!formdata?.firstName.trim()) {
        validateerror.push("Your firstname is required");
      }
      if (!formdata?.phoneNo.trim()) {
        validateerror.push("Your valid phonenumber is required");
      } else if (formdata.phoneNo.length < 11) {
        validateerror.push("Please type in the complete phonenumber");
      }
      if (!formdata?.email.trim()) {
        validateerror.push("Your email is required");
      } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
        validateerror.push("wrong email format");
      }
      if (!placeholder) {
        validateerror.push("Your school detail is required");
      }
      else {
        user?.setformdata((prev) => ({
          ...prev
        }))
      }
      if (!level) {
        validateerror.push("Your class is required");
      }
      if (!formdata?.password.trim()) {
        validateerror.push("Your Password is required");
      } else if (formdata?.password.length < 6) {
        validateerror.push("password should be greater than 6");
      }
      if (!reason) {
        validateerror.push("Your reasons are required");
      }
      user?.seterror(validateerror);
      console.log("error occued again", error)

    }
    finally {
      setIsLoading(false);
    }
  };
  let message: React.ReactNode = "";
  if (user?.error.includes("Your valid phonenumber is required")) {
    message = <div className="error">A Valid Phonenumber Is Required</div>;
  } else if (user?.error.includes("Please type in the complete phonenumber")) {
    message = <div className="error">Incomplete Phone Number</div>;
  }
  let errormessage: React.ReactNode;
  if (user?.error.includes("wrong email format")) {
    errormessage = <div className="error">Wrong Email Address</div>;
  } else if (user?.error.includes("Your email is required")) {
    errormessage = <div className="error"> Email Is Required</div>;
  }
  let passwordmessage: React.ReactNode

  if (user?.error.includes("Your Password is required")) {
    passwordmessage = <div className="error"> password is required</div>
  }
  else if (user?.error.includes("password should be greater than 6")) {
    passwordmessage = <div className="error">characters should be 6 and above</div>
  }

  const inputVariants = {
    rest: { scale: 1 },
    tap: { scale: 1.1, transition: { duration: 1 } },
  };

  useEffect(() => {
    setPreviousLocation(locations.pathname);
  }, [locations]);

  const isFromHomepage = previousLocation === "/";
  const signupClass = isFromHomepage ? 'signup_btn home-page' : 'signup_btn';

  return (
    <motion.div
      className="signup"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2.5,
          delay: 0,
          ease: "easeOut",
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0, ease: "easeOut" } }}
    >
      <h2>Let's Get Started!</h2>
      <form onSubmit={handleSubmit}>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap" >
          <label htmlFor="surname"> Surname</label>
          <input name="surname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your surname is required") && <div className="error"> Surname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="firstname"> First Name</label>
          <input name="firstName" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your firstname is required") && <div className="error"> Firstname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="birthday"> Birthday</label>
          <input name="birthday" type="date" onChange={handleOnchange} />
          {user?.error.includes("Your Date Of birth Is Required") && <div className="error">  Date Of Birth Is Required</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="phonenumber"> Phone Number</label>
          <input name="phoneNo" type="tel" onChange={handleOnchange} />
          {message}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="email"> Email Address</label>
          <input name="email" type="email" onChange={handleOnchange} />
          {errormessage}
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          onClick={handleclick}>
          <label htmlFor="password">Present School</label>
          <div className="surnamess" onClick={handleclick}> <input disabled type="text" name="presentSchool" value={placeholder} onClick={handleclick} onChange={handleOnchange} />
            {show ? (<IoMdArrowDropup onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown onClick={handleclick} style={{ fontSize: "6vw" }} />)}
          </div>
          {user?.error.includes("Your school detail is required") && <div className="error"> School Details Are Required</div>}
          {
            show && (<PresentSchoModal placeholder={placeholder} setPlaceholder={setplaceholder} />)
          }
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="password">Password</label>
          <div className="surnamess"> <input type={shows ? "text" : "password"} name="password" onChange={handleOnchange} />
            {shows ? (<PiEyeLight onClick={handleclicks} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclicks} style={{ fontSize: "6vw" }} />)}
          </div>
          {passwordmessage}
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          onClick={handleclickss}>
          <label htmlFor="class">Class/Level</label>
          <div className="surnamess" onClick={handleclickss}> <input type="text" name="classLevel" value={level} onClick={handleclickss} onChange={handleOnchange} />
            {showss ? (<IoMdArrowDropup onClick={handleclickss} style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown onClick={handleclickss} style={{ fontSize: "6vw" }} />)}
          </div>
          {user?.error.includes("Your class is required") && <div className="error"> Class/Level Is Required</div>}
          {
            showss && (<LevelSchool setlevel={setlevel} />)
          }
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          onClick={handleclicksss}>
          <label htmlFor="reason">Reasons For Joing</label>
          <div className="surnamess" onClick={handleclicksss}> <input type="text" name="reasonForJoining" value={reason} onClick={handleclicksss} onChange={handleOnchange} />
            {showsss ? (<IoMdArrowDropup onClick={handleclicksss} style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown onClick={handleclicksss} style={{ fontSize: "6vw" }} />)}
          </div>
          {user?.error.includes("Your reasons are required") && <div className="error"> Valid Reason for Joining</div>}
          {
            showsss && (<ReasonsModal setreason={setreason} />)
          }
        </motion.div>
        <motion.div className="btn">
          <motion.button type="submit"
            className="signup_btn"
            variants={locations.state?.showstyle}
            initial="initial"
            disabled={Isloading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate="animate">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", gap: "2vw" }}>
              {Isloading && <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><ClipLoader
                color="#ffff"
                cssOverride={{}}
                size={22}
                speedMultiplier={1.3}
              />
              </div>}
              Sign up
            </div></motion.button>
        </motion.div>
        <div className='btn-div21'>Don't have an account?<span><Link to='/signin'>Sign In</Link></span> </div>
        <ToastContainer />
      </form>
    </motion.div>
  );
};
export default Signup;