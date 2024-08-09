import React, { ChangeEvent, useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface Filtereprops {
    handleonchangefilter: (value: string) => void,
    handleOnchangeFees: (value: string) => void,
    handleOnchangeState: (value: string) => void,
    state:string;
    ownership: string,
    fees: string,
    setownership: (value: string) => void,
    setshowfiltered: (value: boolean) => void
}



export const FilteredOptions = ({ handleonchangefilter,state, ownership,handleOnchangeState, setownership, fees, setshowfiltered, handleOnchangeFees }: Filtereprops) => {
    const nigeriaStates = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];
    const [showOwnership, setOwnership] = useState(false)
    const handleownwership = () => {
        setOwnership(!showOwnership)
        // setownership("")
    }
    const [age, setAge] = React.useState('');

    return (
        <div className='z-50 relative flex-col text-white flex font-sans font-bold justify-center  items-center w-[100%]  h-[100%]'>
            <div className='flex flex-col gap-[6vw] -top-[0vw] z-50 relative'>
                {/* <h3>filter by ...</h3> */}
                <FormControl >
                    <InputLabel > ownership</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={ownership}
                        label="Age"
                        onClick={() => setshowfiltered(false)}
                        onChange={(e: any) => handleonchangefilter(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='public'>Public</MenuItem>
                        <MenuItem value='private'>Private</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>
                <FormControl className='w-[70vw]' >
                    <InputLabel id="demo-simple-select-helper-label">Fees</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        onClick={() => setshowfiltered(false)}
                        id="demo-simple-select-helper"
                        value={fees}
                        label="Age"
                        onChange={(e: any) => handleOnchangeFees(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="10000-250000">10,000 - 250,000</MenuItem>
                        <MenuItem value="250000-500000">250,000 - 500,000</MenuItem>
                        <MenuItem value="500000-750000">500,000 - 750,000</MenuItem>
                        <MenuItem value="750000-1000000">750,000 - 1,000,000</MenuItem>
                        <MenuItem value="1000000-2500000">1,000,000 - 2,500,000</MenuItem>
                        <MenuItem value="2500000-3500000">2,500,000 - 3,500,000</MenuItem>
                        <MenuItem value="3500000-5000000">3,500,000 - 5,000,000</MenuItem>
                        <MenuItem value="5000000">5,000,000</MenuItem>
                    </Select>

                </FormControl>
                <FormControl className='w-[70vw]' >
                    <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        onClick={() => setshowfiltered(false)}
                        id="demo-simple-select-helper"
                        value={state}
                        label="Age"
                        // onChange={handleChange}
                        onChange={(e:any) => handleOnchangeState(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                        </MenuItem>
                        {nigeriaStates.map((state, i) => (
                            <MenuItem key={i} value={state} >{state}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        </div>
    )
}
