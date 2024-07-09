import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
interface Filtereprops {
    handleonchangefilter: (value: string) => void,
}

export const FilteredOptions = ({ handleonchangefilter }: Filtereprops) => {
    return (
        <div className='z-50 relative flex-col text-white flex font-sans font-bold justify-center  items-center w-[100%]  h-[100%]'>
            {/* <select onChange={(e) => handleonchangefilter(e.target.value)} className='absolute'>
                <option value="">Select Your Institution</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
             */}
              <h3>filter by ...</h3>
            <div className='w-[88%] mx-auto flex flex-col items-center gap-[4vw]'>
               
                <div className='bg-[#7a4a3a] rounded-[7px] text-[4vw] flex items-center py-[2.5vw]  justify-between h-[100%] px-[7px] w-full'>
                    <div>Filter by ownership</div>
                    <div><TiArrowSortedDown /></div>
                </div>
                <div className='bg-[#7a4a3a] rounded-[7px] text-[4vw]  flex items-center py-[2.5vw]  px-[6px] w-full  h-[60%]'>
                    <div>Filter by location</div>
                </div>
                <div className='bg-[#7a4a3a] rounded-[7px] text-[4vw]   mb-[3vw] flex items-center py-[2.5vw]  justify-between h-[60%] px-[7px] w-full'>
                    <div>School Fees</div>
                    <div><TiArrowSortedDown /></div>
                </div>

            </div>
        </div>
    )
}
