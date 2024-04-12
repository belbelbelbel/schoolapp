import { motion } from "framer-motion"
import "../Styles/Undergraduate.css"
import { useNavigate } from 'react-router-dom'
export const Undergraduate = () => {
    const navigate = useNavigate()
    const handlelback = () => {
        navigate(-1)
    }
    const scrollastold = (sectionid: string) => {
        const section = document.getElementById(sectionid)
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            })
        }
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
                            <div className='image5'>Documents</div>
                        </div>
                    </div>
                    <div className='image6'>More <br />informtion</div>
                </div>

            </div>
            <div className='Undercover_container9'>
                <div className='Undercover_container10'>
                    <div>logo</div>
                    <div onClick={() => scrollastold('firsts')}>Back to top</div>
                </div>
                <div className='Undercover_container11'>
                    <div>
                        <div className='eze'>Terms of Use</div>
                        <div>Information presented here is<br />purely for reference purposes <br />and may have changed after <br />the page was updated. Users are<br />admonished to do further research<br />to get the most up to date information.<br />Click on the 󠅁π symbol to flag information<br />as incorrect or incomplete. Click on ↓ to<br />make modification to unlocked content.</div>
                    </div>
                    <div>
                        <div>Page creator: Uncle Simple<br />Page created: MAY9/2022<br />Last updated: MAY11/2022 by…</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
