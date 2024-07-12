import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading';
import { Sidebar } from './Sidebar';
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


export const Programs2 = () => {
    const navigate = useNavigate();
    const [showschool, setshowschool] = useState(true);
    const [shownavbar, setshownavbar] = useState(false);
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
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                })
                const result = await res.json()
                console.log(result)
                settext(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchprograms()

    }, [])

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
    const handleshow = () => {
        setshownavbar(!shownavbar);
    }
    return (
        <div className='w-screen flex flex-col gap-[3vw]  my-[2rem]'>
            <div className=''>
                <div className="Covenant_container8">
                <div style={{ cursor: "pointer" }}>  </div> <div style={{width: "65vw"}}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)}/></div>

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
                        <div className="Covenant_container_input">  <input type="text" placeholder="Search here" onClick={() => setshowschool(false)} /></div>
                    </div>
                    <div style={{ cursor: "pointer" }}><img src="/Search.svg" alt="search" /></div>
                    {
                        shownavbar && <div><Sidebar shownavbar={shownavbar} setshownavbar={setshownavbar} /></div>
                    }
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#9f5942] via-red-900 to-gray-900 w-screen mx-auto text-white rounded-[0.5vw] flex flex-col text-center items-center justify-center py-[6.5vw] '>
                <div className='w-[88%] mx-auto '>
                    <div className='text-[6.6vw] font-medium '>{searchs.name}</div>
                    <div className='text-[3.2vw] font-medium '>{searchs.address}</div>
                </div>
            </div>
            <div className='flex flex-col text-center items-center justify-center my-[5vw]'>
                <div>

                    {
                        over.map((overs: OverviewItem) => (
                            <div key={overs._id} className='flex  text-center gap-[35vw] mx-0 text-[3.5vw] whitespace-nowrap  w-full font-medium'>
                                <div className=' '>
                                    <div className='  absolute'>{overs.name}:</div>
                                </div>
                                <div className='items-start flex justify-start  text-left'>
                                    <div>{overs.description}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="w-[88%] mx-auto flex flex-col items-center  gap-[9vw]">
                <div className='items-center justify-center flex text-center'>
                    <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Programs</button>
                </div>
                <div className="">
                    {
                        text.length > 0 && text.map((program: {
                            name: React.ReactNode;
                            _id: any
                        }) => (
                            <Link to={`/university/${params.universityid}/${program._id}`} className="" key={program._id}>
                                <div className="">
                                    <div className="text-[4vw] text-black flex flex-col items-center gap-[3.5vw]">
                                        <button className='py-[1.7vw] w-[53vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2'>
                                            <h3>{program.name}</h3>
                                        </button>

                                    </div>

                                </div>
                            </Link>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}
