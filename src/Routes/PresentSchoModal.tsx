import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/PresentSchoModal.css';
import { CiSaveDown1 } from "react-icons/ci";


type SchoolModalProps = {
    placeholder: string;
    setPlaceholder: (placeholder: string) => void;
};

const PresentSchoModal = ({ placeholder, setPlaceholder }: SchoolModalProps) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const stopPropagation = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    const handlePlaceholder = (newPlaceholder: string) => {
        setPlaceholder(newPlaceholder);
        setShowInput(false);
    };

    return (
        <motion.div className='schoolmodal'>
            <div className='schoolmodalp'>Select your current school</div>
            <motion.div
                 initial={{ opacity: 0, y: 100 }}
                 animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                 exit={{ opacity: 1, x: -100 }}
                className='schoolmodal2'>
                <div onClick={() => handlePlaceholder('Ambassador College')}>Ambassador College</div>
                <div onClick={() => handlePlaceholder('Babcock Secondary School')}>Babcock Secondary School</div>
                <div onClick={() => handlePlaceholder('Chrisland School')}>Chrisland School</div>
                <div onClick={() => handlePlaceholder('Corona High School')}>Corona High School</div>
                <div onClick={() => handlePlaceholder('Covenant University School')}>Covenant University School</div>
                <div onClick={() => handlePlaceholder('Dansol High School')}>Dansol High School</div>
                <div onClick={() => handlePlaceholder('Faith Academy')}>Faith Academy</div>
                <div onClick={() => handlePlaceholder('Lead British International')}>Lead British International</div>
                <div onClick={stopPropagation}>
                    <div onClick={() => setShowInput(true)}>Others</div>
                    {showInput && (
                        <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                        exit={{ opacity: 1, x: -100 }}
                         className='schoolmodal3'>
                            <input
                                type='text'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder='Enter your school'
                            />
                            <button onClick={() => handlePlaceholder(inputValue)}><CiSaveDown1  style={{ fontSize: "5vw",fontWeight: "800" }}/></button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PresentSchoModal;
