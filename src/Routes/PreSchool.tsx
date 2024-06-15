import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Provider/Usecontext'
import "../Styles/PreSchool.css"
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { Sidebar } from './Sidebar'
import Cookies from 'js-cookie'
export const PreSchool = () => {
    const navigate = useNavigate()
    const handlelschool = () => {
        navigate("/school")
    }
     const token  = Cookies.get('token')
    const [shownavbar, setshownavbar] = useState(false)
    const user = useContext(Context);

    const handleshow = () => {
        setshownavbar(!shownavbar)
    }

console.log(token)
    useEffect(()=> {
        if(!token) {
          navigate('/signin')
        }
       },[token,navigate])

    return (
        <motion.div
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
            className='preschool-container'>
            <div id="firsts"></div>
            <div className='preschool-container2'>
                <div>
                    <div className="preschool-navbar" >
                        {
                            shownavbar ? <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div> : <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div>
                        }
                        {
                            shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
                        }
                        <div className='preschool-container3' onClick={handlelschool}>
                            <div><input type="text" placeholder='Search' /></div>
                            <div><img src="/Search.svg" alt="search" width="20vw"/></div>
                        </div>
                    </div>
                    <div className='preschool-name'>
                        <div> Good Morning, {user?.formdata.firstName} !</div>
                    </div>
                    <div className='preschool-container4'>
                        <div className='preschool-container5'>
                            <div className='preschool-coname'>Trending news</div>
                            <div className='preschool-container6'>
                                <div className='preschool-container7'>
                                    <div className='preschool-container8'>University fees drop<br />
                                        as students withdraw <br />
                                        their education
                                    </div>
                                </div>
                                <div className='preschool-container8'>
                                    University fees drop<br />
                                    as students withdraw <br />
                                    their education
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='preschool-container4'>
                    <div className='preschool-coname'>Explore by category</div>
                    <div className='preschool-container9'>
                        <div className='preschool-container10'>
                            <div className='preschool-container11'></div>
                        </div>
                        <div className='preschool-container11'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
