import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import Cookies from 'js-cookie';

interface FeeContent {
    applicationFee: string;
    applicationFeeWaiver: string;
    programName: string;
    tuitionFee: string;
}

export const Fees2 = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [activeState, setActiveState] = useState('tution');
    const [feeData, setFeeData] = useState<FeeContent | null>(null); // Change the initial state to null

    const accesstokena = Cookies.get('token');

    useEffect(() => {
        const handleFeesDisplay = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/fees`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstokena}`, 
                    },
                });
                const data = await res.json();
                console.log(data.fees.academic[0].programs[0]);

                // Assuming data.fees contains the relevant fee information
                setFeeData(data.fees.academic[0].programs[0]); // Adjust based on your actual API response structure

            } catch (error) {
                console.error(error);
            }
        };
        handleFeesDisplay();
    }, [params.universityid, accesstokena]);

    return (
        <div className='pt-[2rem] w-screen h-[100vh] flex flex-col justify-between'>
            <div>
                <div className="flex items-center justify-between px-[6vw]">
                    <div style={{ cursor: "pointer" }}>  </div> 
                    <div style={{ width: "75vw" }}>
                        <BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} />
                    </div>
                    <div className="flex items-center gap-[2vw]">
                        <div><img src="/edit button.svg" alt="edit" /></div>
                        <div><img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto'>
                    <div className='flex w-full flex-col items-center justify-center'>
                        <div className='flex flex-col gap-[7vw]'>
                            <div className='items-center justify-center flex text-center pt-[5vw]'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Fees</button>
                            </div>
                        </div>
                        <div className='flex w-full flex-col items-center pt-6 gap-4'>
                            <div className='flex items-center gap-2'>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'tution' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('tution')}>Tutions</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'application fee' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('application fee')}>Application Fee</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'Fee wavier' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('Fee wavier')}>App. Fee Waiver</button>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className={`border-2 rounded-[6px] border-black text-[0.9rem] px-2 h-[5.5vh] ${activeState === 'scholarships' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[10rem]`} onClick={() => setActiveState('scholarships')}>Scholarships</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[4rem]'>
                        {activeState === 'tution' && feeData && (
                            <div className='text-black'>
                                <h2 className='text-lg font-bold'>Tuition Fee: {feeData.tuitionFee}</h2>
                            </div>
                        )}
                        {activeState === 'application fee' && feeData && (
                            <div className='text-black'>
                                <h2 className='text-lg font-bold'>Application Fee: {feeData.applicationFee}</h2>
                            </div>
                        )}
                        {activeState === 'Fee wavier' && feeData && (
                            <div className='text-black'>
                                <h2 className='text-lg font-bold'>Application Fee Waiver: {feeData.applicationFeeWaiver}</h2>
                            </div>
                        )}
                        {activeState === 'scholarships' && feeData && (
                            <div className='text-black'>
                                <h2 className='text-lg font-bold'>Program Name: {feeData.programName}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};
