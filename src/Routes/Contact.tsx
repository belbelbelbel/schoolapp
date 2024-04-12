import React, { useState } from 'react'
import "../Styles/Contact.css"
import { useNavigate } from 'react-router-dom'
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
        <div className='Contact'>
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
                </form>
                <div className='Contact_headera'>FAQs
                </div>
            </div>
            <div className="Contact_contentf">
                <div className="Contact_contentg">
                    <div className='Contact_contenth'>Undergraduate<br />
                        <div className='Contact_contenti' onClick={handlenavigateunder}>
                            <span>FAQs</span>
                            <div className='fan'>
                                <img src="/Arrow (1).svg" alt="nbvcjb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Contact_contentg">
                    <div className='Contact_contenth'>Postgraduate<br />
                        <div className='Contact_contenti' onClick={handlenavigatepost}>
                            <span>FAQs</span>
                            <div className='fan'>
                                <img src="/Arrow (1).svg" alt="nbvcjb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Undercover_container9'>
                <div className='Undercover_container10'>
                    <div>logo</div>
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
        </div>
    )
}
