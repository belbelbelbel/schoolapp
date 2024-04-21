import React, { CSSProperties, useEffect, useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners';
import {motion} from "framer-motion"
import "../Styles/Loader.css"
import { exit } from 'process';
type Props = {}

const Loader = (props: Props) => {

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("orange");
    const [showLogo, setShowLogo] = useState(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowLogo(false);
    //     }, 2000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);
  return (
    <motion.div className='loader'
    initial= {{width : 0}}
    animate= {{width : "100%",transition: {durartion : 1}}}
    exit={{x:window.innerWidth ,transition: {durartion : 1}}}>
        {/* <ClimbingBoxLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader">
        </ClimbingBoxLoader> */}
         <h1><motion.img  src="color_logo_transparent.svg" className='blinking-image' alt="4retrfw" width="320vw"  /></h1>
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