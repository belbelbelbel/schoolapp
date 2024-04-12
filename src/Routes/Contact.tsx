import React, { useState } from 'react'
import "../Styles/Contact.css"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
export const Contact = () => {
    const [text, setxet] = useState({
        name: "",
        email: "",
        message: ""
    })
    const navigate = useNavigate()
    const handlenavigateunder = () => {
        navigate("/school/covenant-university/undergraduate")
    }
    const handlenavigatepost = () => {
        navigate("/school/covenant-university/postgraduate")
    }
    const handleonchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setxet({
            ...text,
            [name]: value
        })
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
        <motion.div className='Contact'
        initial={{ opacity: 0 }}
        animate={{
            transition: {
                duration: 1,
                delay: 0,
                ease: "easeIn",
            },
            opacity: 1
        }}
        exit={{ opacity: 0 }}>
            <div id="best"></div>
            <div className="Contact_container">
                <div className='Contact_containera'>  <img src="/Menu button.svg" alt="" width="22vw" /></div>
                <div className="Contact_containerb">
                    <div> <img src="/edit button.svg" alt="wearfs" /></div>
                    <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                </div>
            </div>
            <div className='Contact_header'>Contacts & FAQs
                <div className='Contact_img'><img src="/Work_7 1.svg" alt="" /></div>
            </div>
            <div className='Contact_content'>
                <div className='Contact_contenta'>Call Us</div>
                <div className='Contact_contenta'>Email Us</div>
                <div className='Contact_contenta'>Fax Us</div>
            </div>
            <div className='Contact_contentb'>QUICK CONTACT</div>
            <div className='Contact_contentd'>
                <form>
                    <div className='Contact_contentc'>
                        <div> <label>Name</label><span>*</span></div>
                        <input placeholder='Enter full name here' type='text' name='name' onChange={handleonchange} />
                    </div>
                    <div className='Contact_contentc'>
                        <div> <label>Email</label><span>*</span></div>
                        <input placeholder='Enter email address here' name='email' type='email' onChange={handleonchange} />
                    </div>
                    <div className='Contact_contente'>
                        <div> <label>Message</label><span>*</span></div>
                        <input placeholder='Enter your mesage here' name='message' type='text' onChange={handleonchange} />
                    </div>

                    <div className="btn">
                        <button  type='button' className="signin_btn">
                            Submit
                        </button>
                    </div>
                </form>
                <div className='Contact_headera'>FAQs
                </div>
            </div>
            <div className="Contact_contentf">
                <div className="Covenant_imgs1">
                    <div><h2>Undergraduate</h2></div>
                    <div className="imis" onClick={handlenavigateunder}><div className="imis" ><h3>FAQs  </h3><div className="imi2s"> <img src="/Arrow (1).svg" alt="dfDF" width="22vw" /></div></div></div>
                </div>
                <div className="Covenant_imgs1">
                    <div><h2>Postgraduate</h2></div>
                    <div className="imis" onClick={handlenavigatepost}><div className="imis" ><h3>FAQs  </h3><div className="imi2s"> <img src="/Arrow (1).svg" alt="dfDF" width="22vw" /></div></div></div>
                </div>
            </div>
            <div className='Undercover_container9'>
                <div className='Undercover_container10'>
                    <div>Logo</div>
                    <div onClick={() => scrollastold('best')}>Back to top</div>
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
