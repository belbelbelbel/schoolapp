import React, { CSSProperties, useEffect, useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners';
import {motion} from "framer-motion"
import "../Styles/Loader.css"
import { exit } from 'process';
type Props = {}

const Loader = (props: Props) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("orange");
    const [showLogo, setShowLogo] = useState(true);
    useEffect(() => {
      

        return () => {
           
        };
    }, []);
  return (

<motion.div
  className='loader'
  initial={{ width: 0 }}
  animate={{ width: "100%", transition: { duration: 1 } }}
  exit={{ x: window.innerWidth, transition: { duration: 1 } }}
  style={{ position: 'relative', overflow: 'hidden' }} // Ensure relative positioning for the overlay
>
  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 1,
    }}
  ></div>

  {/* Video */}
  <video
    autoPlay
    muted
    loop
    style={{
      width: '100%',
      height: '50vh',
      objectFit: 'cover',
      border: 'none',
      outline: 'none',
      display: 'block',
      zIndex: 0, // Ensure video is behind the overlay
      position: 'relative',
    }}
  >
    <source src="CTF Animationedited.mp4" type="video/mp4" />
    Your browser does not support the video tag or the file format of this video.
  </video>
</motion.div>

  )
}
export default Loader;
    // const bgimageRef = useRef<HTMLDivElement>(null);
    // const images = [
    //     "url('c8929824ff290d2bffb2210c1f036515.jpeg')",
    //     "url('d986e85672b9dd3b7ad9625050cb66d6.jpeg')",
    //     "url('young-smiling-college-university-student-with-backpack-holding-book-study-education-back-school-knowledge-concept-3d-vector-people-character-illustrationcartoon-minimal-style_365941-801.avif')"
    // ];

    // let currentImage = 0;
    // useEffect(() => {
    //     const handleChangeBg = () => {
    //         if (bgimageRef.current) {
    //             currentImage = (currentImage + 1) % images.length;
    //             bgimageRef.current.style.backgroundImage = images[currentImage];
    //         }
    //     };
    //     // Preload images
    //     // images.forEach((imageURL) => {
    //     //     const img = new Image();
    //     //     img.src = imageURL;
    //     // });
    
    //     // Set initial background image to the first image in the array
    //     if (bgimageRef.current) {
    //         bgimageRef.current.style.backgroundImage = images[currentImage];
    //     }
    //     // Start changing background image after 3 seconds
    //     const interval = setInterval(handleChangeBg, 1500);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [images]);
    //  ref={bgimageRef} in the first dive component






//     import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../Styles/Signup.css";
// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../Provider/Usecontext";
// import { motion } from "framer-motion";
// import { PiEyeSlash } from "react-icons/pi";
// import { PiEyeLight } from "react-icons/pi";

// const Signup = () => {
//   const locations = useLocation();
//   const user = useContext(Context);
//   const [show, setShow] = useState(false);

//   const handleclick = () => {
//     setShow((prevShow) => !prevShow);
//   };

//   const [previousLocation, setPreviousLocation] = useState<string | null>(null);

//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");

//   const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;
//     if (user) {
//       user.setformdata((prevFormData) => ({
//         ...prevFormData,
//         [name]: value.toString(),
//       }));
//       user.seterror([]);
//       setFirstName(value);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://almaquin.onrender.com/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user?.formdata),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to sign up user");
//       }

//       const data = await res.json();
//       console.log("Signup successful:", data);
//       alert("👍 Signup Successful");
//       navigate("/review");
//     } catch (error) {
//       console.error("Error signing up user:", error);

//       let validateerror: string[] = [];
//       const { formdata } = user || {};
//       if (!formdata?.surname.trim()) {
//         validateerror.push("Your surname is required");
//       }
//       if (!formdata?.birthday.trim()) {
//         validateerror.push("Your Date Of birth Is Required");
//       }
//       if (!formdata?.firstname.trim()) {
//         validateerror.push("Your firstname is required");
//       }
//       if (!formdata?.phonenumber.trim()) {
//         validateerror.push("Your valid phonenumber is required");
//       } else if (formdata.phonenumber.length < 11) {
//         validateerror.push("Please type in the complete phonenumber");
//       }
//       if (!formdata?.email.trim()) {
//         validateerror.push("Your email is required");
//       } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
//         validateerror.push("wrong email format");
//       }
//       if (!formdata?.school.trim()) {
//         validateerror.push("Your school detail is required");
//       }
//       if (!formdata?.class.trim()) {
//         validateerror.push("Your class is required");
//       }
//       if (!formdata?.password.trim()) {
//         validateerror.push("Your Password is required");
//       } else if (formdata?.password.length < 6) {
//         validateerror.push("password should be greater than 6");
//       }
//       if (!formdata?.reason?.trim()) {
//         validateerror.push("Your reasons are required");
//       }
//       if (validateerror.length > 0) {
//         console.error("Validation errors:", validateerror);
//         user?.seterror(validateerror);
//       }
//     }
//   };

//   const inputVariants = {
//     rest: { scale: 1 },
//     tap: { scale: 1.1, transition: { duration: 1 } },
//   };

//   useEffect(() => {
//     setPreviousLocation(locations.pathname);
//   }, [locations]);

//   const isFromHomepage = previousLocation === "/";
//   const signupClass = isFromHomepage ? 'signup_btn home-page' : 'signup_btn';

//   return (
//     <motion.div
//       className="signup"
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: {
//           duration: 2.5,
//           delay: 0,
//           ease: "easeOut",
//         },
//       }}
//       exit={{ opacity: 0, transition: { duration: 0, ease: "easeOut" } }}
//     >
//       <h2>Let's Get Started!</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Your input fields and error messages here */}
//       </form>
//     </motion.div>
//   );
// };

// export default Signup;
