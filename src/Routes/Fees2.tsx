import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

export const Fees2 = () => {
    const navigate = useNavigate();
    const [activeState, setActiveState] = useState("tution")
    console.log(activeState)

    const fruits = ["Apple", "Banana", "Orange"]
    const animals = ["Dog", "Cat", "Elephant"]
    const countries = ["USA", "Canada", "Japan"]

    const HoldFeeArray: string[] | any = []

    if (activeState === "tution") {
        HoldFeeArray.push(fruits)
    }
    if (activeState === "application fee") {
        HoldFeeArray.push(animals)
    }
    if (activeState === "Fee wavier") {
        HoldFeeArray.push(countries)
    }
    

    
    console.log(HoldFeeArray)
    return (
        <div className='pt-[2rem] w-screen'>
            <div id="firsts"></div>
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
                            <button className='border-2 rounded-[6px] border-black text-[0.9rem] px-2 h-[5.5vh] w-[7rem]' onClick={() => setActiveState("tution")}>Tutions</button>
                            <button className='border-2 rounded-[6px] border-black text-[0.9rem]  h-[5.5vh] w-[7.5rem]' onClick={() => setActiveState("application fee")}>Application Fee</button>
                            <button className='border-2 rounded-[6px] border-black h-[5.5vh]  text-[0.9rem]   w-[7.5rem]' onClick={() => setActiveState("Fee wavier")}>App. Fee  Waiver</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='border-2 rounded-[6px] border-black h-[5.5vh] w-[7rem]'></button>
                            <button className='border-2 rounded-[6px]  border-black h-[5.5vh] w-[7.5rem]' onClick={() => setActiveState("scholarships")}>Scholarships</button>
                            <button className='border-2 rounded-[6px] border-black h-[5.5vh] w-[7.5rem]'></button>
                        </div>
                    </div>
                </div>
                {
                    HoldFeeArray[0]?.map((fees: any, index: number | null) => (
                        <div className='text-black' key={index}>
                            {fees}
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 
