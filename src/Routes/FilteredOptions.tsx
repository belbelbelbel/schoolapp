import React, { ChangeEvent, useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface Filtereprops {
    handleonchangefilter: (value: string) => void,
    ownership: string
    setownership: (value: string) => void
    setshowfiltered: (value: boolean) => void 
}



export const FilteredOptions = ({ handleonchangefilter, ownership, setownership,setshowfiltered }: Filtereprops) => {
    const [showOwnership, setOwnership] = useState(false)
    const handleownwership = () => {
        setOwnership(!showOwnership)
        setownership("")
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div className='z-50 relative flex-col text-white flex font-sans font-bold justify-center  items-center w-[100%]  h-[100%]'>
            <div className='flex flex-col gap-[6vw] -top-[0vw] z-50 relative'>
                <h3>filter by ...</h3>
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

                </FormControl>
                <FormControl className='w-[70vw]' >
                    <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        onClick={() => setshowfiltered(false)}
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
                </FormControl>

            </div>
        </div>
    )
}
