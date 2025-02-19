import React from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface FilterProps {
    handleOnChangeFilter: (value: string) => void;
    handleOnChangeFees: (value: string) => void;
    handleOnChangeState: (value: string) => void;
    state: string;
    ownership: string;
    fees: string;
    setShowFiltered: (value: boolean) => void;
}

const nigeriaStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export const FilteredOptions: React.FC<FilterProps> = ({ 
    handleOnChangeFilter, 
    state, 
    ownership, 
    handleOnChangeState, 
    fees, 
    setShowFiltered, 
    handleOnChangeFees 
}) => {
    return (
        <div className='z-50 relative flex-col text-white flex font-sans font-bold justify-center items-center w-full h-full'>
            <div className='flex flex-col gap-[6vw] z-50 relative'>
                <FormControl className='w-[70vw]'>
                    <InputLabel>Ownership</InputLabel>
                    <Select
                        value={ownership}
                        onClick={() => setShowFiltered(false)}
                        onChange={(e) => handleOnChangeFilter(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='public'>Public</MenuItem>
                        <MenuItem value='private'>Private</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl className='w-[70vw]'>
                    <InputLabel>Fees</InputLabel>
                    <Select
                        value={fees}
                        onClick={() => setShowFiltered(false)}
                        onChange={(e) => handleOnChangeFees(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value=""></MenuItem>
                        {[
                            "10000-250000", "250000-500000", "500000-750000", 
                            "750000-1000000", "1000000-2500000", "2500000-3500000", 
                            "3500000-5000000", "5000000"
                        ].map((range, i) => (
                            <MenuItem key={i} value={range}>{range.replace('-', ' - ')}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                
                <FormControl className='w-[70vw]'>
                    <InputLabel>Location</InputLabel>
                    <Select
                        value={state}
                        onClick={() => setShowFiltered(false)}
                        onChange={(e) => handleOnChangeState(e.target.value)}
                        className='h-[12vw] w-full'
                    >
                        <MenuItem value=""></MenuItem>
                        {nigeriaStates.map((state, i) => (
                            <MenuItem key={i} value={state}>{state}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
