import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../components/Loading';
import { Sidebar } from '../sideBar/Sidebar';
import { BiArrowBack } from 'react-icons/bi';
import { HeaderRoute } from '../components/HeaderRoute';
import { SchoolsSearch } from './SchoolsSearch2';

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


export const Programs = () => {
    const navigate = useNavigate();
    const [showschool, setshowschool] = useState(true);
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [searchs, setsearchs] = useState<SearchResult>({ name: '', websiteLink: "", overview: [], shortName: "", address: "", yearFounded: "", ownership: "", location: "" });
    const [school, setschool] = useState([]);
    const [over, setover] = useState([]);
    const [text, settext] = useState([])
    const accesstokena = Cookies.get('token')

    useEffect(() => {
        const fetchprograms = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/undergraduate`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                })
                const result = await res.json()
                // console.log(result)
                settext(result)
            } catch (error) {
                // console.log(error)
            }
        }
        fetchprograms()

    }, [])

    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });

                const result = await res.json();
            
                setover(result.overview);
                setsearchs(result);
                setschool(result.schoolNames);
 
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
        <div>
            {
                showschool ? (
                    <div className='w-screen flex flex-col gap-[3vw]  my-[0rem]'>
                        <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                        <div className="w-[88%] mx-auto flex flex-col items-center  gap-[9vw]">
                            <div className='items-center justify-center flex text-center'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Programs</button>
                            </div>
                            <div className='flex gap-[3vw] items-center flex-col'>
                                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => navigate(`${params.universityid}/undergraduateprogram`)}>Undergraduates</button>
                                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={() => navigate(`${params.universityid}/postgraduateprogram`)}>Postgraduates</button>
                            </div>
                        </div>
                    </div>
                ) : (<div><SchoolsSearch setshowschool={setshowschool} /></div>)
            }
        </div>
    )
}
