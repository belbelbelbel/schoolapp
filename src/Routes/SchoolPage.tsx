import React, { useEffect, useState } from 'react';
import "../Styles/Covenant.css";
import { Sidebar } from './Sidebar';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

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
    const [showschool, setshowschool] = useState(true);
    const [shownavbar, setshownavbar] = useState(false);
    const params = useParams();

    const [searchs, setsearchs] = useState<SearchResult>({ name: '', websiteLink: "", overview: [], shortName: "", address: "", yearFounded: "", ownership: "", location: "" });
    const [school, setschool] = useState([]);
    const [loading, setLoading] = useState(true);
    const [over, setover] = useState([]);
    const accesstokena = Cookies.get('token');
    const handleshow = () => {
        setshownavbar(!shownavbar);
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

    return (
        <div className='w-screen  my-[2rem]'>
            <div className='w- mx-auto'>
                <div className="Covenant_container8">
                    <div></div>
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
                    {/* <div className='flex items-center justify-between text-[3.5vw] font-medium'>
                        <div>Year Founded:-</div>
                        <div className='items-start w-[46%]  flex justify-start  text-left'>
                            <div>{searchs.yearFounded}</div>
                        </div>
                    </div> */}

                    {
                        over.map((overs: OverviewItem) => (
                            <div key={overs._id} className='flex  text-center gap-[35vw] mx-0 text-[3.5vw] w-full font-medium'>
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
            <div className='flex items-center mt-[16vw] justify-center flex-col gap-[3vw]'>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Programs</button>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Admissions</button>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Contacts</button>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Useful links</button>
                <button className='py-[1.7vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
            </div>
        </div>
    );
}
