import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Signup.css";
import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Context, valueprops } from "../Provider/Usecontext";
import { motion } from "framer-motion";
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PresentSchoModal from "./PresentSchoModal";
import { LevelSchool } from "./LevelSchool";
import { ReasonsModal } from "./ReasonsModal";
import { ClipLoader } from "react-spinners";
import Cookies from "js-cookie";
const Signup = () => {
  const locations = useLocation();
  const [Isloading, setIsLoading] = useState(false)
  const user = useContext(Context);
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);
  const [showsss, setShowsss] = useState(false);
  const [corserror, setCorserror] = useState("")
  const [reason, setreason] = useState("")
  const [placeholder, setplaceholder] = useState("")
  const [level, setlevel] = useState("")
  const token = Cookies.get('token')
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
  const navigate = useNavigate();
  const [error, seterror] = useState("")
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const { formdata } = user || {};
  let err = ""

  useEffect(()=> {
    if(token) {
      navigate('/preschool')
    }
   },[user?.isLoggedIn,navigate])

  const handleSubmits = async (data: valueprops) => {
    setIsLoading(true);
    console.log(data)
    try {
      if (user) {
        const res = await fetch("https://almaquin.onrender.com/api/signup", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data),
        })
        const result = await res.json()
        localStorage.setItem("corsignup", result);
        console.log(result);
        seterror(result.message)
        if (!res.ok) {
          throw new Error("error fetching user signup")
        }
        navigate("/verification", { state: { data } });
      }
    } catch (error) {
      console.log("error occured again", error)
      if (!localStorage.getItem("corsignup")) {
        setCorserror("Error Occured,Please Try again")
      }
    }
    finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    rest: { scale: 1 },
    tap: { scale: 1.1, transition: { duration: 1 } },
  };

  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<valueprops>()
  useEffect(() => {
    level && setValue("classLevel", level || "", { shouldValidate: true })
  }, [level])
  useEffect(() => {
    reason && setValue("schoolLocation", reason || "", { shouldValidate: true })
  }, [reason])
  useEffect(() => {
    placeholder && setValue("presentSchool", placeholder || "", { shouldValidate: true })
  }, [placeholder])
  const onSubmit: SubmitHandler<valueprops> = (data) => {
    console.log(data);
    handleSubmits({
      ...data,
      email: data.email || "",
    });
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setlevel(newValue);
    setValue("classLevel", newValue || "", { shouldValidate: true });
  };

  return (
    <motion.div
      className="signup"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0,
          ease: "easeOut",
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0, ease: "easeOut" } }}
    >
      <h2>Let's Get Started!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap" >
          <label htmlFor="surname"> Surname</label>
          <input type="text"
            {...register("surname", {
              required: " Surname is required",
            })}
          />
          {errors.surname && <div className="error"> {errors.surname.message}</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="firstname"> First Name</label>
          <input
            {...register("firstName", {
              required: " Firstname is required",
            })} type="text" />
          {
            errors.firstName && <div className="error">{errors.firstName.message}</div>
          }
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="birthday"> Birthday</label>
          <input
            {...register("birthday", {
              required: " Date Of Birth Is Required",
            })} type="date" />
          {errors.birthday && <div className="error">{errors.birthday.message}</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="phonenumber"> Phone Number</label>
          <input
            {...register("phoneNo", {
              required: " A valid phonenumber is required",
              minLength: {
                value: 11,
                message: "Please  fill in a  complete phonenumber",
              },
              maxLength: {
                value: 11,
                message: "Phonenumber should not be greater than 11",
              }
            })} type="number" />
          {errors.phoneNo && <div className="error">{errors.phoneNo.message}</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="email"> Email Address</label>
          <input type="email"
            {...register("email", {
              required: "  Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Fill in a correct email address",
              },
            })} />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="reasons"> Reason for Joining</label>
          <input
            {...register('reasonForJoining', {
              required: " Your reasons are required",
            })} type="text" />
          {errors.reasonForJoining && <div className="error">{errors.reasonForJoining.message}</div>}
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="password">Password</label>
          <div className="surnamess"> <input type={shows ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 22
            })}
          />
            {shows ? (<PiEyeLight onClick={handleclicks} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclicks} style={{ fontSize: "6vw" }} />)}
          </div>
          <div>
            {
              errors.password?.type === "minLength" && <div className="errorss">Password should be at-least 8 characters</div>

            }
            {
              errors.password?.type === "maxLength" && <div className="errorss">Password must be at-most 22 Characters</div>
            }
            {
              errors.password?.type === "required" && <div className="errorss">Password is required</div>
            }
          </div>
        </motion.div>

        <motion.div className="surnames"
          variants={inputVariants}
          onClick={handleclick}>
          <label htmlFor="password">Present School</label>
          <div className="surnamess" onClick={handleclick}>
            <input
              type="text"
              {...register("presentSchool", {
                required: " School detail is required"
              })}
              value={placeholder}
              onClick={handleclick}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setplaceholder(e.target.value)}
            />
            {show ? (<IoMdArrowDropup onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown onClick={handleclick} style={{ fontSize: "6vw" }} />)}
          </div>
          {errors.presentSchool && <div className="errorss"> {errors.presentSchool.message}</div>}
          {
            show && (<PresentSchoModal placeholder={placeholder} setPlaceholder={setplaceholder} />)
          }
        </motion.div>
        <motion.div className="surnames"
       
          variants={inputVariants}
          onClick={handleclickss}>
          <label htmlFor="class">Class/Level</label>
          <div className="surnamess" onClick={handleclickss}> <input type="text"  
            {...register("classLevel", {
              required: " Class is required"
            })} value={level}  onClick={handleclickss} onChange={handleLevelChange}/>
            {showss ? (<IoMdArrowDropup  style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown  style={{ fontSize: "6vw" }} onClick={handleclickss}/>)}
          </div>
          {errors.classLevel && <div className="errorss">{errors.classLevel.message}</div>}
          {
            showss && (<LevelSchool setlevel={setlevel} />)
          }
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}

          onClick={handleclicksss}>
          <label htmlFor="reason">Where is your school located</label>
          <div className="surnamess" onClick={handleclicksss}> <input type="text"
            {...register("schoolLocation", {
              required: " School location is required"
            })} value={reason || ""} onClick={handleclicksss} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setreason(e.target.value)} />
            {showsss ? (<IoMdArrowDropup onClick={handleclicksss} style={{ fontSize: "6vw" }} />) : (<IoMdArrowDropdown onClick={handleclicksss} style={{ fontSize: "6vw" }} />)}
          </div>
          {errors.schoolLocation && <div className="errorss">{errors.schoolLocation.message}</div>}
          {
            showsss && (<ReasonsModal setreason={setreason} />)
          }
        </motion.div>
        {!Isloading && (
          <div className="errorss" style={{ textAlign: "center", fontSize: "5vw", fontFamily: "urbanist", letterSpacing: "1px" }}>{error}</div>
        )}
        {!Isloading && (
          <div className="errorss" style={{ textAlign: "center", fontSize: "5vw", fontFamily: "urbanist", letterSpacing: "1px" }}>{corserror}</div>
        )}
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
