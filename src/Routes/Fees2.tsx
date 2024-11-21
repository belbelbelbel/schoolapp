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
    scholarships: string[];
}

export const Fees2 = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [activeState, setActiveState] = useState('tution');
    const [feeData, setFeeData] = useState<FeeContent | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const accesstokena = Cookies.get('token');

    useEffect(() => {
        const handleFeesDisplay = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/fees`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstokena}`,
                    },
                });
                const data = await res.json();
                setFeeData(data.fees.academic[0].programs[0]);
                console.log(data.fees.academic[0].programs[0]);
            } catch (error) {
                console.error(error); // Handle errors appropriately
            } finally {
                setIsLoading(false);
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
                                <button className='py-[1.7vw] w-[63vw] border-0 outline-0 bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>
                                    Fees
                                </button>
                            </div>
                        </div>
                        <div className='flex w-full flex-col items-center pt-6 gap-4'>
                            <div className='flex items-center gap-2'>
                                <button className={`border-2 rounded-[6px] border-black  text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'tution' ? 'bg-gradient-to-r from-[#9f5942] border-0 outline-0 via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('tution')}>Tuitions</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'application fee' ? 'bg-gradient-to-r from-[#9f5942] border-0 outline-0 via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('application fee')}>Application Fee</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === 'Fee wavier' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 border-0 outline-0 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState('Fee wavier')}>App. Fee Waiver</button>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className={`border-2 rounded-[6px] border-black text-[0.9rem] px-2 h-[5.5vh] ${activeState === 'scholarships' ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[10rem]`} onClick={() => setActiveState('scholarships')}>Scholarships</button>
                            </div>
                        </div>
                    </div>

                    {/* Loading spinner */}
                    {isLoading ? (
                        <div className="flex justify-center items-center mt-10">
                            <div className="text-black text-lg font-bold">Loading...</div>
                        </div>
                    ) : (
                        <div className='mt-[4rem]'>
                            {activeState === 'tution' && feeData && (
                                <div className='text-black'>
                                    <h2 className='text-lg font-bold'>Tuition: {feeData.tuitionFee}</h2>
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
                                    {/* <h2 className='text-lg font-bold'>Scholarships:</h2> */}
                                    {feeData.scholarships.map((item: any, index) => (
                                        <div key={index} className='font-bold'>
                                            <h2 className=' text-xl'>Name</h2>
                                            <div className='font-medium'>{item.name}</div>
                                        <h2 className=' text-xl mt-4'>Details</h2>
                                            <div className='font-medium'>
                                                {item.details}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};
