import React, { useContext } from 'react'
import { Context } from '../Provider/Usecontext'
import "../Styles/PreSchool.css"
export const PreSchool = () => {
    const user = useContext(Context)
    return (
        <div className='preschool-container'>
            <div className='preschool-container2'>
           <div>
           <div className="preschool-navbar">
                    <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                    <div className='preschool-container3'>
                        <div><input type="text" placeholder='Search' /></div>
                        <div><img src="/Search.svg" alt="whasf" /></div>
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
        </div>
    )
}
