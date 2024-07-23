import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Loading } from './Loading';
import { Schools2 } from './Schools2';
import { BiArrowBack } from 'react-icons/bi';


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

interface showSchoolProps {
    showschool: boolean;
    setshowschool: (showschool: boolean) => void;
}

export const HeaderRoute = ({ showschool, setshowschool }: showSchoolProps) => {
    const navigate = useNavigate();
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

    // if (loading) {
    //     return <div className='h-[30vw] w-screen bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900'></div>;
    // }
    return (
        <div>
            {
                // showschool ? (
                    <div className='w-screen  my-[2.5rem]'>
                        <div className='w- mx-auto flex flex-col  gap-[2vw] justify-center'>
                            <div className="Covenant_container8">
                                <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "57.6vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                                <div className="Covenant_container8a">
                                    <div> <img src="/edit button.svg" alt="edit" /></div>
                                    <div> <img src="/Vector (4).svg" alt="flag" /></div>
                                </div>
                            </div>
                            <div className="Covenant_container2">
                                <div className="Covenant_container3">
                                    {
                                        !shownavbar ? <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div> : <div><img src="/Menu button.svg" alt="menu" onClick={handleshow} /></div>
                                    }
                                    <div className="Covenant_container_input">  <input type="text" placeholder="Search here" onClick={() => setshowschool(false)} className='text-black' /></div>
                                </div>
                                <div style={{ cursor: "pointer" }}><img src="/Search.svg" alt="search" /></div>
                                {
                                    shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
                                }
                            </div>
                        </div>
                        {
                            loading ? (
                                <div className='bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 w-screen mx-auto text-white rounded-[0.5vw] flex flex-col text-center items-center justify-center h-[30vw] '>
                                    <div className='w-screen h-full loaderss'>

                                    </div>
                                </div>
                            ) : (
                                <div className='bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 w-screen mx-auto text-white rounded-[0.5vw] flex flex-col text-center items-center justify-center h-[30vw] '>
                                    <div className='w-[88%] mx-auto '>
                                        <div>
                                            <div className='text-[6.6vw] font-medium '>{searchs.name}</div>
                                            <div className='text-[3.2vw] font-medium '>{searchs.address}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className='flex flex-col text-center items-center justify-center my-[5vw]'>
                            <div>
                                {
                                    over.map((overs: OverviewItem) => (
                                        <div key={overs._id} className='flex  text-center gap-[35vw] mx-0 text-[3.5vw] whitespace-nowrap  w-full font-medium'>
                                            {
                                                !loading ? (
                                                    <div className='flex  text-center gap-[35vw] mx-0 text-[3.5vw] whitespace-nowrap  w-full font-medium'>
                                                        <div className=' '>
                                                            <div className=' absolute'>{overs.name}:</div>
                                                        </div>
                                                        <div className='items-start flex justify-start  text-left'>
                                                            <div>{overs.description}</div>
                                                        </div>
                                                    </div>
                                                ) : (<div className='h-[10.5vw] loaderss w-full'>
                                                    <div className=''>

                                                    </div>
                                                </div>)
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                // ) : (<Schools2 setshowschool={setshowschool} />)
            }
        </div>
    )
}
