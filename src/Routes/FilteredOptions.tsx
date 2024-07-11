import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface Filtereprops {
    handleonchangefilter: (value: string) => void,
}



export const FilteredOptions = ({ handleonchangefilter }: Filtereprops) => {
    const [showOwnership, setOwnership] = useState(false)
    const handleownwership = () => {
        setOwnership(!showOwnership)
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div className='z-50 relative flex-col text-white flex font-sans font-bold justify-center  items-center w-[100%]  h-[100%]'>
            {/* <select onChange={(e) => handleonchangefilter(e.target.value)} className='absolute'>
                <option value="">Select Your Institution</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
             */}

            {/* <div className='w-[88%] mx-auto flex flex-col items-center gap-[4vw]'>

                <div className='bg-[#7a4a3a]  flex-col rounded-[7px] overflow text-[4vw] flex items-center py-[2.5vw]  justify-between h-[100%] px-[7px] w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <div>Filter by ownership</div>
                        <div onClick={handleownwership}><TiArrowSortedDown /></div>
                    </div>
                    <div>  {
                        showOwnership && (
                            // <div className='fixed inset-0 bg-black   items-center flex flex-col  bg-opacity-40 w-screen h-screen'>
                            <div className='z-50 absolute -left-[20vw] -top-[0vw]   justify-center w-[65%] h-[55%]  items-center rounded-[8px] flex flex-col gap-[2.5vw] bg-black ' onClick={() => setOwnership(false)}>

                            </div>
                            // </div>
                        )
                    }
                    </div>
                </div>
                <div className='bg-[#7a4a3a] rounded-[7px] text-[4vw]  flex items-center py-[2.5vw]  px-[6px] w-full  h-[60%]'>
                    <div>Filter by location</div>
                </div>
                <div className='bg-[#7a4a3a] rounded-[7px] text-[4vw]   mb-[3vw] flex items-center py-[2.5vw]  justify-between h-[60%] px-[7px] w-full'>
                    <div>Filter by Fees</div>
                    <div><TiArrowSortedDown /></div>
                </div>

            </div> */}
            <div className='flex flex-col gap-[6vw] -top-[0vw] z-50 relative'>
                {/* <h3>filter by ...</h3> */}
                <FormControl >
                    <InputLabel > ownership</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={340}>Public</MenuItem>
                        <MenuItem value={350}>Private</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>
                <FormControl className='w-[70vw]' >
                    <InputLabel id="demo-simple-select-helper-label">Fees</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={10}>10,000 - 100,000</MenuItem>
                        <MenuItem value={20}>101,000 - 200,000</MenuItem>
                        <MenuItem value={30}>201,000 - 300,000</MenuItem>
                        <MenuItem value={40}>301,000 - 400,000</MenuItem>
                        <MenuItem value={50}>301,000 - 400,000</MenuItem>
                        <MenuItem value={60}>301,000 - 400,000</MenuItem>
                        <MenuItem value={70}>301,000 - 400,000</MenuItem>
                        <MenuItem value={80}>301,000 - 400,000</MenuItem>
                        <MenuItem value={90}>301,000 - 400,000</MenuItem>
                        <MenuItem value={100}>Above 1,000,000</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>
                <FormControl className='w-[70vw]' >
                    <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={10}>Abia State</MenuItem>
                        <MenuItem value={20}>Adamawa</MenuItem>
                        <MenuItem value={30}>Akwa-ibom</MenuItem>
                        <MenuItem value={40}>Anambra</MenuItem>
                        <MenuItem value={50}>Bauchi</MenuItem>
                        <MenuItem value={60}>Bayelsa</MenuItem>
                        <MenuItem value={70}>Benue</MenuItem>
                        <MenuItem value={80}>Borno</MenuItem>
                        <MenuItem value={90}>Cross River</MenuItem>
                        <MenuItem value={100}>Delta</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

            </div>
        </div>
    )
}
