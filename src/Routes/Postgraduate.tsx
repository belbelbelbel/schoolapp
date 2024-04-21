import React from 'react'
import {motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
export const Postgraduate = () => {
    const navigate = useNavigate()
    const handlelback = () => {
        navigate(-1)
    }
    const scrollastold = (sectionid: string)=> {
        const section = document.getElementById(sectionid)
        if(section) {
            section.scrollIntoView({
                behavior:'smooth'
            })
        }
    }
    const handledocuments = () => {
        navigate("/school/covenant-university/documents")
    }
    return (
        <motion.div
            className='Undergraduate'
            initial={{ opacity: 0 }}
            animate={{
                transition: {
                    duration: 1,
                    delay: 0,
                    ease: "easeIn",
                },
                opacity: 1
            }}
            exit={{ opacity: 0 }}
        >
            <div id="firsts"></div>
            <div className="Undercover_container" >
                <div className='Undercover_containera'>  <img src="/Arrow (2).svg" alt="" onClick={handlelback} width="25vw" /></div>
                <div className="Undercover_containerb">
                    <div> <img src="/edit button.svg" alt="wearfs" /></div>
                    <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                </div>
            </div>
            <div className="Undercover_container2">
                <div className="Undercover_container3">
                    <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                    <div className="Covenant_container_input">  <input type="text" placeholder="Search here" /></div>
                </div>
                <div><img src="/Search.svg" alt="whasf" /></div>
            </div>
            <div className="Undercover_container4">
                <h1>Postgraduate</h1>
                <div className='Undercover_container5'>
                    <div><p>Latest news<br/> concerning the school</p></div>
                    <div className='Undercover_container6'>
                        <img src="/Ellipse 2.svg" alt="wesafa" />
                        <img src="/Ellipse 3.svg" alt="weafasd" />
                        <img src="/Ellipse 4.svg" alt="weadsfa" />
                    </div>
                </div>
                <h2>Admissions</h2>
                <div className='Undercover_container7'>
                    <div className='image1'>Dates</div>
                    <div className='Undercover_container8'>
                        <div>
                            <div className='image2'>Fees</div>
                        </div>
                        <div>
                            <div className='image3'>Exams</div>
                        </div>
                    </div>
                    <div className='Undercover_container8'>
                        <div>
                            <div className='image4'>Fluid<br></br> students</div>
                        </div>
                        <div>
                            <div className='image5' onClick={handledocuments}>Documents</div>
                        </div>
                    </div>
                    <div className='image6'>More <br/>informtion</div>
                </div>
              
            </div>
            <Footer/>
        </motion.div>
    )
}
