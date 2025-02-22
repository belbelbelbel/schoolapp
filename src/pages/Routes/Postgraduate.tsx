import React, { useEffect, useState } from 'react'
import { HeaderRoute } from '../components/HeaderRoute'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import Cookies from 'js-cookie'
import { Schools2 } from '../components/SchoolsModalSearch'

export const Postgraduate = () => {
    const [showschool, setshowschool] = useState(true)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { universityid } = useParams();
    const accesstokena = Cookies.get('token');

    const handleNavigate = (path: string) => navigate(`/university/${universityid}/${path}`);

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });

                if (!res.ok) throw new Error("Error fetching description");

                await res.json();
            } catch (error) {
                console.error("Description error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDescription();
    }, [universityid, accesstokena]);

    if (loading) return <Loading />;

    return (
        <div>
            {showschool ? (
                <>
                    <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                    <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[6vw]'>
                        <div className='flex flex-col gap-[3vw]'>
                            {["Admission", "Postgraduate"].map((text) => (
                                <div key={text} className='items-center justify-center flex text-center'>
                                    <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>
                                        {text}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col gap-[4vw] items-center'>
                            <div className='flex items-center gap-[2.5vw]'>
                                {["dates", "documentss", "faq"].map((path) => (
                                    <button
                                        key={path}
                                        className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                        onClick={handleNavigate.bind(null, path)}
                                    >
                                        {path.charAt(0).toUpperCase() + path.slice(1)}
                                    </button>
                                ))}
                            </div>

                            <div className='flex flex-col items-center gap-[4vw]'>
                                <div className='flex items-center gap-[2.5vw]'>
                                    {["fluids", "fees", "exams"].map((path) => (
                                        <button
                                            key={path}
                                            className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                            onClick={handleNavigate.bind(null, path)}
                                        >
                                            {path.charAt(0).toUpperCase() + path.slice(1)}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                    onClick={handleNavigate.bind(null, "undergraduate")}
                                >
                                    Undergraduate
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-[3vw]'>
                            {["Rankings", "Useful links", "Terms of use"].map((text, index) => (
                                <button
                                    key={index}
                                    className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'
                                    onClick={text === "Useful links" ? handleNavigate.bind(null, "links") : undefined}
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Schools2 setshowschool={setshowschool} />
            )}
        </div>
    )
}
