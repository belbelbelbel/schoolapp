import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export const Documents2 = () => {
    const navigate = useNavigate()
    return (
        <div className='pt-[2rem]'>
            <div className='w-[86%] mx-auto'>
                <div id="firsts"></div>
                <div className="flex items-ceneter justify-between px-[6vw]">
                    <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                    <div className="flex items-center gap-[2vw]">
                        <div> <img src="/edit button.svg" alt="edit" /></div>
                        <div> <img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='w-[86%] mx-auto'>
                    <div>
                        <div className='flex flex-col  gap-[7vw]'>
                            <div className='items-center justify-center flex text-center pt-[5vw]'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Documents</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
