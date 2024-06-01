import React, { useState } from 'react'
import "../Styles/Contact.css"
import { useNavigate, useParams } from 'react-router-dom'
import {motion} from "framer-motion"
import { Footer } from './Footer'
export const Contact = () => {
    const params = useParams()
    const [text, setxet] = useState({
        name: "",
        email: "",
        message: ""
    })
    const navigate = useNavigate()
    const handlenavigateunder = () => {
        navigate(`${params.universityid}/underfaq`)
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
            <div id="firsts"></div>
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
           <Footer/>
        </motion.div>
    )
}
