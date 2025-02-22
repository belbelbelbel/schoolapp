import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../../Styles/PresentSchoModal.css';
import { CiSaveDown1 } from "react-icons/ci";
type SchoolModalProps = {
    placeholder: string;
    setPlaceholder: (placeholder: string) => void;
};
const PresentSchoModal = ({ placeholder, setPlaceholder }: SchoolModalProps) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false)

    const stopPropagation = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    const handlePlaceholder = (newPlaceholder: string) => {
        setPlaceholder(newPlaceholder);
        setShowInput(false);
    };

    useEffect(() => {
        const handleSchoolName = async () => {
            setLoading(true)
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/sec-schools`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("accesstokena")}`,
                    },
                })
                const result = await res.json()
                // console.log(result.secSchools)
                setSchools(result.secSchools)
                if (!res.ok) {
                    throw new Error("Error occurred in fetching schools")
                }
                else {
                    // alert("goode one oin schools")
                }
            } catch (error) {
                // console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        handleSchoolName()
    }, [])

    return (
        <motion.div className='schoolmodal  z-50'>
            <div className='schoolmodalp'>Select your current school</div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 1, x: -100 }}
                className='schoolmodal2'>
                <div className=''>
                    {
                        !loading ? (
                            <div className='flex flex-col justify-center items-center gap-[8vw]'>
                                {
                                    schools.length > 0 && schools.map((school: {
                                        _id: any;
                                        name: string;
                                    }) => (
                                        <div key={school._id}>
                                            <div key={school._id} onClick={() => handlePlaceholder(school.name)}>
                                                {school.name}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (<div>loading...</div>)
                    }
                </div>
                <div onClick={stopPropagation}>
                    <div onClick={() => setShowInput(true)}>
                        {
                            !loading ? "Others" : ""
                        }
                    </div>
                    {showInput && (
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                            exit={{ opacity: 1, x: -100 }}
                            className='schoolmodal3'>
                            <input
                                type='text'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder='Enter your school'
                            />
                            <button onClick={() => handlePlaceholder(inputValue)}><CiSaveDown1 style={{ fontSize: "5vw", fontWeight: "800" }} /></button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PresentSchoModal;
