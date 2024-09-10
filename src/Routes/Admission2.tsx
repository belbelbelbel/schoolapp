import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar';
import { Loading } from './Loading';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Schools2 } from './Schools2';
import { BiArrowBack } from "react-icons/bi";
import { HeaderRoute } from './HeaderRoute';

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

export const Admission2 = () => {
    const navigate = useNavigate();
    const [showschool, setshowschool] = useState(true);
    const [shownavbar, setshownavbar] = useState(false);
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [searchs, setsearchs] = useState<SearchResult>({ name: '', websiteLink: "", overview: [], shortName: "", address: "", yearFounded: "", ownership: "", location: "" });
    const [school, setschool] = useState([]);
    const [over, setover] = useState([]);
    const accesstokena = Cookies.get('token');
    const handleshow = () => {
        setshownavbar(!shownavbar);
    }
    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }
    const handleprograms = () => {
        navigate(`${params.universityid}/colleges`);
    }
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }
    const handlenavigatepost = () => {
        navigate(`/university/${params.universityid}/postgraduate`);
    }
    const handlenavigatecontact = () => {
        navigate(`/university/${params.universityid}/contact`);
    }
    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/description`, {
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
                    // throw new Error("error occured in the description");
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

    if (loading) {
        return <div> <Loading /></div>;
    }

    return (
        <div className=''>
            {
                showschool ? (
                    <div>
                        <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                        <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[3vw]'>
                            <div className='items-center justify-center flex text-center'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
                            </div>
                            <button className='py-[1.5vw] w-[49vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2' onClick={handlenavigatepost}>Postgraduates</button>
                            <button className='py-[1.5vw] w-[49vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2' onClick={handlenavigateunder}>Undergraduates</button>
                            {/* <button className='py-[1.9vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button> */}
                            <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                            <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                            <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                        </div>
                    </div>

                ) : (<Schools2 setshowschool={setshowschool} />)
            }
        </div>
    )
}
