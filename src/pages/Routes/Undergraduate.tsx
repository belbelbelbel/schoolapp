import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderRoute } from '../components/HeaderRoute';
import { SchoolsSearch } from './SchoolsSearch2';


export const Undergraduate = () => {
  const [showSchool, setShowSchool] = useState(true);
  const navigate = useNavigate();
  const { universityid } = useParams();

  const handleNavigation = (path: string) => {
    navigate(`/university/${universityid}/${path}`);
  };

  if (!showSchool) return <SchoolsSearch setshowschool={setShowSchool} />;

  return (
    <div>
      <HeaderRoute showschool={showSchool} setshowschool={setShowSchool} />
      <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[6vw]'>
        <div className='flex flex-col gap-[3vw]'>
          <div className='flex justify-center'>
            <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
          </div>
          <div className='flex justify-center'>
            <button className='py-[1.7vw] w-[56vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Undergraduates</button>
          </div>
        </div>

        <div className='flex flex-col gap-[4vw] items-center'>
          <div className='flex gap-[2.5vw]'>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('date')}>Dates</button>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('documents')}>Documents</button>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('faq')}>FAQ</button>
          </div>
          
          <div className='flex gap-[2.5vw]'>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('fluid')}>Fluids Students</button>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('fees')}>Fees</button>
            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('exam')}>Exams</button>
          </div>
          
          <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('postgraduate')}>Postgraduates</button>
        </div>

        <div className='flex flex-col gap-[3vw]'>
          <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
          <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation('links')}>Useful links</button>
          <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
        </div>
      </div>
    </div>
  );
};
