import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
    const [showLogo, setShowLogo] = useState(true);
    const bgimageRef = useRef<HTMLDivElement>(null);
    const images = [
        "url('c8929824ff290d2bffb2210c1f036515.jpeg')",
        "url('d986e85672b9dd3b7ad9625050cb66d6.jpeg')",
        "url('young-smiling-college-university-student-with-backpack-holding-book-study-education-back-school-knowledge-concept-3d-vector-people-character-illustrationcartoon-minimal-style_365941-801.avif')"
    ];

    let currentImage = 0;
    useEffect(() => {
        const handleChangeBg = () => {
            if (bgimageRef.current) {
                currentImage = (currentImage + 1) % images.length;
                bgimageRef.current.style.backgroundImage = images[currentImage];
            }
        };
        // Preload images
        // images.forEach((imageURL) => {
        //     const img = new Image();
        //     img.src = imageURL;
        // });
    
        // Set initial background image to the first image in the array
        if (bgimageRef.current) {
            bgimageRef.current.style.backgroundImage = images[currentImage];
        }
        // Start changing background image after 3 seconds
        const interval = setInterval(handleChangeBg, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [images]);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            {showLogo ? (<div className="logo" ></div>):(
                  <div className="home_container" ref={bgimageRef}>
                  <div className='home_container2'>
                      <div>
                          <Link to="/signup"><button className='signupbtn'>Sign up</button></Link>
                      </div>
                      <div>
                          <Link to="/Signin"><button className='signinbtn'>Sign in</button></Link>
                      </div>
                  </div>
              </div>
            )}
          
        </div>
    );
};

export default Home;
