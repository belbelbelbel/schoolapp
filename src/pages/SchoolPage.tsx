import React, { useEffect, useState } from 'react';
import "../Styles/Covenant.css";
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Schools2 } from './components/SchoolsModalSearch';
import { HeaderRoute } from './components/HeaderRoute';
import { AnimatePresence, motion } from 'framer-motion';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';

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
    const params = useParams();
    const accesstokena = Cookies.get('token');
    
    const [showschool, setshowschool] = useState(true);
    const [showList, setShowList] = useState(false);
    const [showProgramsList, setShowProgramsList] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchs, setsearchs] = useState<SearchResult | null>(null);

    useEffect(() => {
        const fetchUniversityDetails = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    },
                });
                
                if (!res.ok) throw new Error("Error fetching university details");

                const result = await res.json();
                setsearchs(result);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversityDetails();
    }, [params.universityid, accesstokena]);

    const handleNavigation = (path: string) => navigate(`${params.universityid}/${path}`);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
        exit: { opacity: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    if (loading) return <Loading />;
    
    return (
        <div className='h-[100dvh] flex flex-col gap-4 justify-between'>
            {showschool ? (
                <div className='w-screen pb-[3vw]'>
                    <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                    <div className='flex items-center  mt-[16vw] pt-2 justify-center flex-col gap-[4vw]'>
                        {[{ label: "Programs", state: showProgramsList, toggle: setShowProgramsList, links: [
                            { label: "Undergraduates", path: "undergraduateprogram" },
                            { label: "Postgraduates", path: "postgraduateprogram" }
                        ]},
                        { label: "Admissions", state: showList, toggle: setShowList, links: [
                            { label: "Dates", path: "date" },
                            { label: "Fees", path: "fees" },
                            { label: "Exams", path: "exam" },
                            { label: "Documents", path: "documents" }
                        ]}].map((section, index) => (
                            <div key={index}>
                                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => section.toggle(!section.state)}>
                                    {section.label}
                                </button>
                                <AnimatePresence>
                                    {section.state && (
                                        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className='flex items-center mt-[1vw] justify-center flex-col gap-[3vw]'>
                                            {section.links.map((link, i) => (
                                                <motion.button key={i} variants={buttonVariants} className='py-[1vw] w-[42vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => handleNavigation(link.path)}>
                                                    {link.label}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        {[{ label: "Contacts", path: "contact" }, { label: "Rankings" }, { label: "Useful links", path: "links" }, { label: "Terms of use" }].map((item, index) => (
                            <button key={index} className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => item.path && handleNavigation(item.path)}>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <Schools2 setshowschool={setshowschool} />
            )}
            <Footer />
        </div>
    );
};
