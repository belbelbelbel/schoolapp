import React from 'react'
import { HeaderRoute } from './HeaderRoute'
import { useNavigate, useParams } from 'react-router-dom'

export const Postgraduate2 = () => {
    const navigate  = useNavigate()
    const params = useParams();
    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }
    const handleprograms = () => {
        navigate(`${params.universityid}/colleges`);
    }
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }
    const handlenavigatepost = () => {
        navigate(`/university/${params.universityid}/postgraduate`);
    }
    const handlenavigatecontact = () => {
        navigate(`/university/${params.universityid}/contact`);
    }

    return (
        <div>
            <div>
                <HeaderRoute />
                <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[3vw]'>
                    <div className='items-center justify-center flex text-center'>
                        <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
                    </div>
                    <div className='items-center justify-center flex text-center'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Postgraduate</button>
                            </div>
                    <button className='py-[1.5vw] w-[49vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2' onClick={handlenavigatepost}>Postgraduates</button>
                    <button className='py-[1.5vw] w-[49vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2' onClick={handlenavigateunder}>Undergraduates</button>
                    {/* <button className='py-[1.9vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button> */}
                    <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                    <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                    <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                </div>
            </div>
        </div>
    )
}
