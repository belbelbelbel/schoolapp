import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';

export const Undergraduatesprogram = () => {
    const navigate = useNavigate();
    const { universityid } = useParams();
    const accesstoken = Cookies.get('token');
    const [isLoading, setIsLoading] = useState(false);
    const [undergradPrograms, setUndergradPrograms] = useState([]);

    useEffect(() => {
        const fetchUndergraduatePrograms = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${universityid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accesstoken}`,
                    },
                });
                const data = await res.json();
                setUndergradPrograms(data.university.undergraduate || []);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUndergraduatePrograms();
    }, [accesstoken, universityid]);

    return (
        <div className='h-[100dvh] flex flex-col justify-between'>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='pt-12 px-[6vw]'>
                    <div className='flex items-center justify-between'>
                        <BiArrowBack className='text-[5.2vw] cursor-pointer' onClick={() => navigate(-1)} />
                        <div className='flex items-center gap-4'>
                            <img src='/edit button.svg' alt='edit' />
                            <img src='/Vector (4).svg' alt='flag' />
                        </div>
                    </div>

                    <div className='flex justify-center pt-[10vw]'>
                        <button className='py-[1.7vw] w-[58vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw]'>
                            Undergraduate
                        </button>
                    </div>
                    <div className="pt-[2rem]">
                            {undergradPrograms.length > 0 ? (
                                undergradPrograms.map((program: { name: React.ReactNode; _id: any }) => (
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
            )}
            <Footer />
        </div>
    );
};
