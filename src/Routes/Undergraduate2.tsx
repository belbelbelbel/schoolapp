import React, { useState } from 'react'
import { HeaderRoute } from './HeaderRoute'
import { useNavigate, useParams } from 'react-router-dom';
import { Schools2 } from './Schools2';

export const Undergraduate2 = () => {
  const [showschool, setshowschool] = useState(true)
  const navigate = useNavigate()
  const params = useParams();

  const handlefees = () => {
    navigate(`${params.universityid}/links`)
  }

  const handlefaq = () => {
    navigate(`${params.universityid}/faq`)
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

  const handlefee = () => {
    navigate(`${params.universityid}/fees`)
  }

  const handlenavigatepost = () => {
    navigate(`/university/${params.universityid}/postgraduate`);
  }

  return (
    <div>
      {
        showschool ? (
          <div>
            <div>
              <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
              <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[6vw]'>
                <div className='flex flex-col gap-[3vw] '>
                  <div className='items-center justify-center flex text-center'>
                    <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
                  </div>
                  <div className='items-center justify-center flex text-center'>
                    <button className='py-[1.7vw] w-[56vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Undergraduates</button>
                  </div>
                </div>
                <div className='flex flex-col gap-[4vw] items-center'>
                  <div className='flex items-center gap-[2.5vw]'>
                    <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledate}>Dates</button>
                    <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledocuments}>Documents</button>
                    <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefaq}>FAQ</button>

                  </div>
                  <div className='flex flex-col items-center gap-[4vw]'>
                    <div className='flex items-center gap-[2.5vw]'>
                      <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefluid}>Fluids Students</button>
                      <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefee}>Fees</button>
                      <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlexam}>Exams</button>
                    </div>
                    <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatepost}> Postgraduates</button>
                  </div>
                </div>
                {/* <button className='py-[1.9vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button> */}
                <div className='flex flex-col gap-[3vw]'>
                  <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                  <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                  <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                </div>
              </div>
            </div>
          </div>
        ) : (<div><Schools2 setshowschool={setshowschool} /></div>)
      }
    </div>
  )
}
