import "../Styles/Covenant.css"
import { motion } from "framer-motion"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Outlet, Link, useNavigate } from "react-router-dom"
export const Covenant = () => {
    const navigate = useNavigate()
    const handlenavigateunder = () => {
        navigate("undergraduate")
    }
    const handlenavigatepost = () => {
        navigate("postgraduate")
    } 
    const handlenavigatecontact = () => {
        navigate("contact")
    }
    return (
        <motion.div className="Covenant_container"
            initial={{ opacity: 0 }}
            animate={{
                transition: {
                    duration: 2,
                    delay: 0,
                    ease: "easeIn",
                },
                opacity: 1
            }}
            exit={{ opacity: 0 }}>
            <div className="Covenant_container8">
                <div></div>
                <div className="Covenant_container8a">
                   <div> <img src="/edit button.svg" alt="wearfs" /></div>
                   <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                </div>
            </div>
            <div className="Covenant_container2">
                <div className="Covenant_container3">
                    <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                    <div className="Covenant_container_input">  <input type="text" placeholder="Search here" /></div>
                </div>
                <div><img src="/Search.svg" alt="whasf" /></div>
            </div>
            <div className="Covenant_container4">
                <div className="images">
                    <img src="/shell 1.svg" alt="sdveds" />
                </div>
                <div className="container5">
                    <h3>Covenant University, Ota</h3>
                    <div> <p>Km. 10 Idiroko Road, Sango, Ota, Ogun, Nigeria</p></div>
                    <div className="Covenant_container6">
                        <div className="Container6"><img src="/Vector.svg" alt="gfgdf" /><div> Private, Christian</div></div>
                        <div className="Container6"><img src="/Vector (1).svg" alt="2q3ref" /> <div> covenant.edu.ng</div></div>
                    </div>
                    <div className="Covenant_containers6"><img src="/Vector (2).svg" alt="rthg4r" /> <div className="tim">2002</div></div>
                </div>
            </div>
            <div className="Covenant_container7">
                <div className="Covenant_container7a">
                    <p>Official colour :Crimson</p>
                    <p>Alumni symbol</p>
                    <p>Accreditation: NUC</p>
                    <p>Campus: Decentralized</p>
                    <p>Motto</p>
                    <p>Previous name</p>
                </div>
                <div className="Covenant_container7b">
                    <p>Grading system: 5-point</p>
                    <p>GPA</p>
                    <p>Population UG</p>
                    <p>Population PG</p>
                    <p>Acceptance rate   (%)</p>
                </div>
            </div>
            <div className="Covenant_img">
                <div className="Covenant_img1">
                    <div><h2>Undergraduate</h2></div>
                    <div className="imi" onClick={handlenavigateunder}><div className="imi" ><h3>Learn more  </h3><div className="imi2"> <img src="/Arrow (1).svg" alt="dfDF" /></div></div></div>
                </div>
                <div className="Covenant_img1">
                    <div><h2>Postgraduate</h2></div>
                    <div className="imi" onClick={ handlenavigatepost}><div className="imi" ><h3>Learn more  </h3><div className="imi2"><img src="/Arrow (1).svg" alt="dfDF" className="imi2"/></div></div></div>
                </div>
                <div className="Covenant_img1">
                    <div><h2>Contact Us</h2></div>
                    <div className="imi" onClick={ handlenavigatecontact}><div className="imi" ><h3>Learn more  </h3><div className="imi2"><img src="/Arrow (1).svg" alt="dfDF" className="imi2"/></div></div></div>
                </div>
            </div>
            <div className="Covenant-colleges">
                <h1>Colleges</h1>
                <div className="Covenant-collegesa">
                    <div>
                        <div><h3>College of Leadership and <br></br>Development Studies(CLDS)</h3>
                            <div className="ire">
                                <span>See departments </span>
                                <div className="anya">
                                    <img src="/Vector (3).svg" alt="rrwadf" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                </div>
                <div className="Covenant-collegesa">
                    <div>
                        <div><h3>College of Management and <br></br>Social Science(CMSS)</h3>
                            <div className="ire">
                                <span>See departments </span>
                                <div className="anya">
                                    <img src="/Vector (3).svg" alt="rrwadf" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                </div>
                <div className="Covenant-collegesa">
                    <div>
                        <div><h3>College of Engineering <br></br>(COE)</h3>
                            <div className="ire">
                                <span>See departments </span>
                                <div className="anya">
                                    <img src="/Vector (3).svg" alt="rrwadf" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                </div>
                <div className="Covenant-collegesa">
                    <div>
                        <div><h3>College of Science and <br></br>Technology(CST)</h3>
                            <div className="ire">
                                <span>See departments </span>
                                <div className="anya">
                                    <img src="/Vector (3).svg" alt="rrwadf" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                </div>

            </div>
        </motion.div>
    )
}
