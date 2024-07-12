import React from 'react'
import { HeaderRoute } from './HeaderRoute'
import { useNavigate, useParams } from 'react-router-dom'

export const Postgraduate2 = () => {
    const navigate = useNavigate()
    const params = useParams();

    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }
    const handledate = () => {
        navigate(`${params.universityid}/date`)
    }
    const handlefluid = () => {
        navigate(`${params.universityid}/fluid`)
    }
    const handlexam = () => {
        navigate(`${params.universityid}/exam`)
    }
    const handledocuments = () => {
        navigate(`/university/${params.universityid}/documents`)
    }
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }
    return (
        <div>
            <div>
                <HeaderRoute />
                <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[6vw]'>
                    <div className='flex flex-col gap-[3vw] '>
                        <div className='items-center justify-center flex text-center'>
                            <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
                        </div>
                        <div className='items-center justify-center flex text-center'>
                            <button className='py-[1.7vw] w-[58vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Postgraduate</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4vw] items-center'>
                        <div className='flex items-center gap-[2.5vw]'>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledate}>Dates</button>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledocuments}>Documents</button>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlexam}>Exams</button>
                        </div>
                        <div className='flex flex-col items-center gap-[4vw]'>
                            <div className='flex items-center gap-[2.5vw]'>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefluid}>Fluids Students</button>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Fees</button>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>More Info</button>
                            </div>
                            <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigateunder}> Undergraduates</button>
                        </div>
                    </div>

                    {/* <button className='py-[1.9vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button> */}
                    <div className='flex flex-col items-center gap-[3vw]'>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
