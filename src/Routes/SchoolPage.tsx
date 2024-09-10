import React, { useEffect, useState } from 'react';
import "../Styles/Covenant.css";
import { Sidebar } from './Sidebar';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { Schools2 } from './Schools2';
import { BiArrowBack } from 'react-icons/bi';
import { HeaderRoute } from './HeaderRoute';
import { AnimatePresence, motion } from 'framer-motion';
import { Footer } from './Footer';

interface OverviewItem {
    _id: string;
    name: string;
    description: string;
}

interface SearchResult {
    name: string;
    websiteLink: string;
    overview: OverviewItem[];
    shortName: string;
    address: string;
    yearFounded: string;
    ownership: string;
    location: string;
}


export const SchoolPage = () => {
    const navigate = useNavigate();
    const [showschool, setshowschool] = useState(true);
    const [showList, setShowList] = useState(false);
    const [showProgramsList, setShowProgramsList] = useState(false);
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [searchs, setsearchs] = useState<SearchResult>({ name: '', websiteLink: "", overview: [], shortName: "", address: "", yearFounded: "", ownership: "", location: "" });
    const [school, setschool] = useState([]);
    const [over, setover] = useState([]);
    const accesstokena = Cookies.get('token');
    const handleShowList = () => {
        setShowList(!showList);
    }
    const handleShowProgramList = () => {
        setShowProgramsList(!showProgramsList);
    }
    const handledate = () => {
        navigate(`${params.universityid}/date`)
    }
    const handlexam = () => {
        navigate(`${params.universityid}/exam`)
    }

    const handledocuments = () => {
        navigate(`/university/${params.universityid}/documents`)
    }

    const handlefee = () => {
        navigate(`${params.universityid}/fees`)
    }
    const handlenavigatecontact = () => {
        navigate(`/university/${params.universityid}/contact`);
    }

    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }
    const handlenavigatepost = () => {
        navigate(`/university/${params.universityid}/postgraduate`);
    }
    const handleprograms = () => {
        navigate(`${params.universityid}/colleges`);
    }
    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });

                const result = await res.json();
                // console.log(result);
                // console.log(result.overview);
                setover(result.overview);
                setsearchs(result);
                setschool(result.schoolNames);
                // console.log(result.schoolNames);
                setLoading(false);

                if (!res.ok) {
                    throw new Error("error occured in the description");
                }
                if (!searchs) {
                    // console.log("No data found for this university");
                    setLoading(false);
                }
                // console.log("the results are", result);
            } catch (error) {
                // console.log("description error", error);
                setLoading(false);
            }
        }
        fetchdescribe();
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
            },
        },
    };


    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };



    if (loading) {
        return <div> <Loading /></div>;
    }
    return (
        <div className='h-[100dvh] flex flex-col gap-4 justify-between'>
            {
                showschool ? (
                    <div className='w-screen pb-[3vw'>
                        <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                        <div className='flex items-center mt-[16vw] justify-center flex-col gap-[3vw]'>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'  onClick={handleShowProgramList}>Programs</button>
                            <AnimatePresence>
                                {
                                    showProgramsList && (
                                        <motion.div
                                            key="button-list"
                                            variants={containerVariants}   // Apply the parent variants
                                            initial="hidden"               // Initial state of the parent
                                            animate="visible"              // Animate to visible state
                                            exit="exit"                    // Animate to exit state
                                            className='flex items-center mt-[1vw] justify-center flex-col gap-[3vw]'
                                        >
                                            <motion.button
                                                variants={buttonVariants}
                                                className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                                onClick={() => navigate(`${params.universityid}/undergraduateprogram`)}
                                            >
                                                Undergraduates
                                            </motion.button>
                                            <motion.button
                                                variants={buttonVariants}
                                                className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                                onClick={() => navigate(`${params.universityid}/postgraduateprogram`)}
                                            >
                                                Postgraduates
                                            </motion.button>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handleShowList}>Admissions</button>
                            <AnimatePresence>
                                {showList && (
                                    <motion.div
                                        key="button-list"
                                        variants={containerVariants}   // Apply the parent variants
                                        initial="hidden"               // Initial state of the parent
                                        animate="visible"              // Animate to visible state
                                        exit="exit"                    // Animate to exit state
                                        className='flex items-center mt-[1vw] justify-center flex-col gap-[3vw]'
                                    >
                                        <motion.button
                                            variants={buttonVariants}  // Apply staggered animation to buttons
                                            className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                            onClick={handledate}
                                        >
                                            Dates
                                        </motion.button>
                                        <motion.button
                                            variants={buttonVariants}
                                            className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                            onClick={handlefee}
                                        >
                                            Fees
                                        </motion.button>
                                        <motion.button
                                            variants={buttonVariants}
                                            className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                            onClick={handlexam}
                                        >
                                            Exams
                                        </motion.button>
                                        <motion.button
                                            variants={buttonVariants}
                                            className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                            onClick={handledocuments}
                                        >
                                            Documents
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                        </div>

                    </div>
                ) : (<Schools2 setshowschool={setshowschool} />)
            }
            <div>
                <Footer/>
            </div>
        </div>
    );
}
