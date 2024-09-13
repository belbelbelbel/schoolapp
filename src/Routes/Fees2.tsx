import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import Cookies from 'js-cookie';

export const Fees2 = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [activeState, setActiveState] = useState("tution")
    // console.log(activeState)
    const accesstokena = Cookies.get('token')
    const fruits = ["Apple", "Banana", "Orange"]
    const animals = ["Dog", "Cat", "Elephant"]
    const countries = ["USA", "Canada", "Japan"]
    const country = ["UGANDA", "CAMEROOM", "JAMAICA"]

    const HoldFeeArray: string[] | any = []

    useEffect(() => {
        const handleFeesDisplay = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/fees`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstokena}`, 
                    },
                })
                const data = await res.json()
                // console.log(data)
                if (activeState === "tution") {
                    HoldFeeArray.push(fruits)
                }
                if (activeState === "application fee") {
                    HoldFeeArray.push(animals)
                }
                if (activeState === "Fee wavier") {
                    HoldFeeArray.push(countries)
                }
                if (activeState === "scholarships") {
                    HoldFeeArray.push(country)
                }
            } catch (error) {
                // console.log(error)
            }
        }
        handleFeesDisplay()

    },[params.universityid])

    // console.log(HoldFeeArray)
    return (
        <div className='pt-[2rem] w-screen h-[100vh] flex flex-col justify-between'>
            {/* <div id="firsts"></div> */}
            <div>
                <div className="flex items-ceneter justify-between px-[6vw]">
                    <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                    <div className="flex items-center gap-[2vw]">
                        <div> <img src="/edit button.svg" alt="edit" /></div>
                        <div> <img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto'>
                    <div className='flex w-full flex-col items-center justify-center'>
                        <div className='flex flex-col  gap-[7vw]'>
                            <div className='items-center justify-center flex text-center pt-[5vw]'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Fees</button>
                            </div>
                        </div>
                        <div className='flex w-full flex-col items-center pt-6 gap-4'>
                            <div className='flex items-center gap-2'>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === "tution" ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState("tution")} >Tutions</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === "application fee" ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState("application fee")}>Application Fee</button>
                                <button className={`border-2 rounded-[6px] border-black text-[0.75rem] px-2 h-[5.5vh] ${activeState === "Fee wavier" ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[7rem]`} onClick={() => setActiveState("Fee wavier")}>App. Fee  Waiver</button>
                            </div>
                            <div className='flex items-center gap-2'>
                                {/* <button className='border-2 rounded-[6px] border-black h-[5.5vh] w-[7rem]'></button> */}
                                <button className={`border-2 rounded-[6px] border-black text-[0.9rem] px-2 h-[5.5vh] ${activeState === "scholarships" ? 'bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 text-white' : 'transparent'} w-[10rem]`} onClick={() => setActiveState("scholarships")}>Scholarships</button>
                                {/* <button className='border-2 rounded-[6px] border-black h-[5.5vh] w-[7.5rem]'></button> */}
                            </div>
                        </div>
                    </div>
                    <div className='mt-[4rem]'>
                        {
                            HoldFeeArray[0]?.map((fees: any, index: number | null) => (
                                <div className='text-black' key={index}>
                                    {fees}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
} 
