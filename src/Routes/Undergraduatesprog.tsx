import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import { Loading } from './Loading'
import { Footer } from './Footer'

export const Undergraduatesprog = () => {
    const navigate = useNavigate()
    const accesstokena = Cookies.get('token');
    const [isLoading, setisLoading] = useState(false)
    const [undergradPrograms, setundergradPrograms] = useState([])
    const params = useParams();

    useEffect(() => {
        const handleUndergraduatePrograms = async () => {
            setisLoading(true)
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstokena}`,
                    },
                });
                const result = await res.json();
                // console.log(result)
                // console.log(result.university.undergraduate);
                setundergradPrograms(result.university.undergraduate)
                if (!res.ok) {
                    // throw new Error('Network response was not ok');
                }


            } catch (error) {
                console.error('Fetch error:', error);
            }
            finally {
                setisLoading(false)
            }
        };

        handleUndergraduatePrograms();
    }, [accesstokena]);

    return (
        <div className='h-[100dvh] flex flex-col justify-between'>
            {
                !isLoading ? (
                    <div className='pt-[3rem]'>
                        <div className="flex items-ceneter justify-between px-[6vw]">
                            <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                            <div className="flex items-center gap-[2vw]">
                                <div> <img src="/edit button.svg" alt="edit" /></div>
                                <div> <img src="/Vector (4).svg" alt="flag" /></div>
                            </div>
                        </div>
                        <div className='w-full mx-auto'>
                            <div>
                                <div className='flex flex-col pt-[10vw]  gap-[7vw]'>
                                    <div className='items-center justify-center flex-col gap-[3vw] flex text-center '>
                                        {/* <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Programs</button> */}
                                        <button className='py-[1.7vw] w-[58vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Undergraduates</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[2rem]">
                            {
                                undergradPrograms.length > 0 && undergradPrograms.map((program: {
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
                ) : (<div><Loading /></div>)
            }
            <div>
                <Footer/>
            </div>
        </div>
    )
}
