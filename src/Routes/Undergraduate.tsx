import { motion } from "framer-motion"
import "../Styles/Undergraduate.css"
import { useNavigate, useParams } from 'react-router-dom'
import { Footer } from "./Footer"
export const Undergraduate = () => {
    const params = useParams()
    const navigate = useNavigate()
    const handlelback = () => {
        navigate(-1)
    }
    const handledocuments = () => {
        navigate(`/university/${params.universityid}/documents`)
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
                <h1>Undergraduate</h1>
                <div className='Undercover_container5'>
                    <div><p>Latest news<br /> concerning the school</p></div>
                    <div className='Undercover_container6'>
                        <img src="/Ellipse 2.svg" alt="wesafa" />
                        <img src="/Ellipse 3.svg" alt="weafasd" />
                        <img src="/Ellipse 4.svg" alt="weadsfa" />
                    </div>
                </div>
                <div className='Undercover_container7'>
                    <div className='Undercover_container8'>
                    <div className="ima-flex">
                            <div className='image1'><img src="/Ellipse 10.png" alt="gfds" /></div>
                            <p>Dates</p>
                        </div>
                        <div className="ima-flex">
                            <div className='image2'><img src="/Ellipse 10 (1).png" alt="rfdfewds" /></div>
                            <h1>Admissions</h1>
                        </div>
                        <div className="ima-flex" onClick={handledocuments}>
                            <div className='image3' ><img src="/Ellipse 10 (2).png" alt="gfd" /></div>
                            <p>Documents</p>
                        </div>
                    </div>
                    <div className='Undercover_container20'>
                        <div className="ima-flex">
                            <div className='image4'><img src="/Ellipse 10 (3).png" alt="dfcd" /></div>
                            <p>Fees</p>
                        </div>
                        <div className="ima-flex">
                            <div className='image5' ><img src="/Ellipse 10 (4).png" alt="deds" /></div>
                            <span>Exams</span>
                        </div>
                        <div className="ima-flex"> <div className='image6'><img src="/Ellipse 10 (5).png" alt="we" /></div><p>Fluid<div>Students</div></p></div>
                        
                    </div>

                </div>

            </div>
            <Footer />

        </motion.div>
    )
}
