import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { BiArrowBack } from 'react-icons/bi';
import { Footer } from './Footer';

export const Postgraduatesprog = () => {
    const navigate = useNavigate();
    const accesstokena = Cookies.get('token');
    const [isLoading, setisLoading] = useState(false);
    const [postgradPrograms, setpostgradPrograms] = useState([]);
    const { universityid } = useParams();

    useEffect(() => {
        const fetchPostgraduatePrograms = async () => {
            setisLoading(true);
            setpostgradPrograms([]); // Reset before fetching
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${universityid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstokena}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await res.json();
                setpostgradPrograms(result.university.postgraduate || []);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setisLoading(false);
            }
        };

        if (universityid) {
            fetchPostgraduatePrograms();
        }
    }, [accesstokena, universityid]);

    return (
        <div className='h-[100dvh] flex flex-col justify-between'>
            <div>
                {!isLoading ? (
                    <div className='pt-[3rem]'>
                        <div className="flex items-center justify-between px-[6vw]">
                            <div style={{ width: "75vw" }}>
                                <BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} />
                            </div>
                            <div className="flex items-center gap-[2vw]">
                                <img src="/edit button.svg" alt="edit" />
                                <img src="/Vector (4).svg" alt="flag" />
                            </div>
                        </div>

                        <div className='w-full mx-auto pt-[10vw] flex flex-col items-center gap-[7vw] text-center'>
                            <button className='py-[1.7vw] w-[58vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>
                                Postgraduates
                            </button>
                        </div>

                        <div className="pt-[2rem]">
                            {postgradPrograms.length > 0 ? (
                                postgradPrograms.map((program: { name: React.ReactNode; _id: any }) => (
                                    <Link to={`/university/${universityid}/programs`} key={program._id}>
                                        <div className="text-[4vw] text-black flex flex-col items-center gap-[3.5vw]">
                                            <button className='py-[1.7vw] w-[53vw] border-[#9f5942] rounded-[2vw] text-[3.8vw] border-2'>
                                                <h3>{program.name}</h3>
                                            </button>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No postgraduate programs available.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>

            <Footer />
        </div>
    );
};
