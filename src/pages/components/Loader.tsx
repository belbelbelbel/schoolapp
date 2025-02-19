import React, { CSSProperties, useEffect, useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners';
import {motion} from "framer-motion"
import "../../Styles/Loader.css"
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