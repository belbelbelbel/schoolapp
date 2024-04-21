import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Signup.css";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Provider/Usecontext";
import { animate, motion } from "framer-motion";
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
const Signup = () => {
  const locations = useLocation()
  console.log(locations)
  const user = useContext(Context);
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow((prevShow) => !prevShow);
  };

  // const isFromHomepage = locations.pathname === "/";
  const [previousLocation, setPreviousLocation] = useState<string | null>(null);
  // useEffect(() => {
  //   console.log("tis is the  location",locations)
  // }, [locations])
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (user) {
      user.setformdata((prevFormData) => ({
        ...prevFormData,
        [name]: value.toString(),
      }));
      user.seterror([]);
      setFirstName(value)
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let validateerror: string[] = [];
    const { formdata } = user || {};
    if (!formdata?.surname.trim()) {
      validateerror.push("Your surname is required");
    }
    if (!formdata?.birthday.trim()) {
      validateerror.push("Your Date Of birth Is Required");
    }
    if (!formdata?.firstname.trim()) {
      validateerror.push("Your firstname is required");
    }
    if (!formdata?.phonenumber.trim()) {
      validateerror.push("Your valid phonenumber is required");
    } else if (formdata.phonenumber.length < 11) {
      validateerror.push("Please type in the complete phonenumber");
    }
    if (!formdata?.email.trim()) {
      validateerror.push("Your email is required");
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      validateerror.push("wrong email format");
    }
    if (!formdata?.school.trim()) {
      validateerror.push("Your school detail is required");
    }
    if (!formdata?.class.trim()) {
      validateerror.push("Your class is required");
    }
    if (!formdata?.password.trim()) {
      validateerror.push("Your Password is required")
    }
    else if (formdata?.password.length < 6) {
      validateerror.push("password should be greater than 6")
    }
    if (!formdata?.reason?.trim()) {
      validateerror.push("Your reasons are required");
    }
    if (validateerror.length === 0) {
      alert("👍Signup Successful");
      navigate("/review");
    } else {
      console.error("Validation errors:", validateerror);
    }
    user?.seterror(validateerror);
  };
  const buttonVariants = {
    initial: {
      y: "-50vh",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 1.3,
        delay: 0,
        ease: "easeOut",
      },
    },
  };
  let message: React.ReactNode = "";
  if (user?.error.includes("Your valid phonenumber is required")) {
    message = <div className="error">Your Valid Phonenumber Is Required</div>;
  } else if (user?.error.includes("Please type in the complete phonenumber")) {
    message = <div className="error">Incomplete Phone Number</div>;
  }
  let errormessage: React.ReactNode;
  if (user?.error.includes("wrong email format")) {
    errormessage = <div className="error">Wrong Email Address</div>;
  } else if (user?.error.includes("Your email is required")) {
    errormessage = <div className="error">Your Email Is Required</div>;
  }

  let passwordmessage: React.ReactNode

  if (user?.error.includes("Your Password is required")) {
    passwordmessage = <div className="error">Your password is required</div>
  }
  else if (user?.error.includes("password should be greater than 6")) {
    passwordmessage = <div className="error">characters should be 6 and above</div>
  }

  const inputVariants = {
    rest: { scale: 1 },
    tap: { scale: 1.1, transition: { duration: 1 } },
  };

  useEffect(() => {
    setPreviousLocation(locations.pathname)
  }, [locations])
  //     initial= {{width:0}}
  //animate = {{width: "100%"}}//
  //exit={{x:window.innerWidth, transition:{duration : 0.5}}}>//
  const isFromHomepage = previousLocation === "/";
  const signupClass = isFromHomepage ? 'signup_btn home-page' : 'signup_btn';
  console.log(locations.state)
  return (
    <motion.div className="signup"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: {
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
          {user?.error.includes("Your surname is required") && <div className="error">Your Surname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="firstname"> First Name</label>
          <input name="firstname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your firstname is required") && <div className="error">Your Firstname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="birthday"> Birthday</label>
          <input name="birthday" type="date" onChange={handleOnchange} />
          {user?.error.includes("Your Date Of birth Is Required") && <div className="error"> Your Date Of Birth Is Required</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="phonenumber"> Phone Number</label>
          <input name="phonenumber" type="tel" onChange={handleOnchange} />
          {message}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="email"> Email Address</label>
          <input name="email" type="email" onChange={handleOnchange} />
          {errormessage}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="school"> Present School</label>
          <input name="school" type="text"  onChange={handleOnchange} />
          {user?.error.includes("Your school detail is required") && <div className="error">Your School Details Are Required</div>}
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="school">Password</label>
          <div className="surnamess"> <input type={show ? "text": "password"} name="password" onChange={handleOnchange} />
            {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
          </div>
          {passwordmessage}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="class"> Class/Level</label>
          <input name="class" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your class is required") && <div className="error">Your Class/Level Is Required</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="reason"> Reason For Joining</label>
          <input name="reason" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your reasons are required") && <div className="error">Your Valid Phonenumber Is Required</div>}
        </motion.div>
        <motion.div className="btn">
          <motion.button type="submit"
            className="signup_btn"
            variants={locations.state?.showstyle}
            initial="initial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate="animate"
          >Sign Up</motion.button>
        </motion.div>
        <div className='btn-div21'>Don't have an account?<span><Link to='/signin'>Sign In</Link></span> </div>
      </form>
    </motion.div>
  );
};

export default Signup;
