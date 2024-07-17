import React, { useEffect, useState } from 'react';
import "../Styles/Covenant.css";
import { Sidebar } from './Sidebar';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { Schools2 } from './Schools2';
import { BiArrowBack } from 'react-icons/bi';
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


export const SchoolPage = () => {
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
    const handlenavigatecontact = () => {
        navigate(`/university/${params.universityid}/contact`);
    }
    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }
    const handleaddmision = () => {
        navigate(`${params.universityid}/admission`)
    }
    const handleprograms = () => {
        navigate(`${params.universityid}/colleges`);
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
                console.log(result);
                console.log(result.overview);
                setover(result.overview);
                setsearchs(result);
                setschool(result.schoolNames);
                console.log(result.schoolNames);
                setLoading(false);

                if (!res.ok) {
                    throw new Error("error occured in the description");
                }
                if (!searchs) {
                    console.log("No data found for this university");
                    setLoading(false);
                }
                console.log("the results are", result);
            } catch (error) {
                console.log("description error", error);
                setLoading(false);
            }
        }
        fetchdescribe();
    }, []);

    if (loading) {
        return <div> <Loading /></div>;
    }
    return (
        <div>
            {
                showschool ? (
                    <div className='w-screen pb-[3vw]'>
                     <HeaderRoute/>
                        <div className='flex items-center mt-[16vw] justify-center flex-col gap-[3vw]'>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handleprograms}>Programs</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handleaddmision}>Admissions</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                            <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                        </div>
                    </div>
                ) : (<Schools2 setshowschool={setshowschool} />)
            }
        </div>
    );
}
