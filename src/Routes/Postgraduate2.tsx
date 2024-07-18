import React, { useEffect, useState } from 'react'
import { HeaderRoute } from './HeaderRoute'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'
import Cookies from 'js-cookie'

export const Postgraduate2 = () => {
    const [showschool, setshowschool] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const params = useParams();
    const accesstokena = Cookies.get('token');

    const handlefees = () => {
        navigate(`${params.universityid}/links`)
    }

    const handlefee = () => {
        navigate(`${params.universityid}/fees`)
    }

    const handlefaq = () => {
        navigate(`${params.universityid}/faq`)
    }

    const handledate = () => {
        navigate(`${params.universityid}/date`)
    }
    const handlefluid = () => {
        navigate(`${params.universityid}/fluid`)
    }
    const handlexam = () => {
        navigate(`${params.universityid}/exam`)
    }
    const handledocuments = () => {
        navigate(`/university/${params.universityid}/documents`)
    }
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }


    useEffect(() => {
        const fetchdescribe = async () => {
            setLoading(true);
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

                if (!res.ok) {
                    throw new Error("error occured in the description");
                }
                console.log("the results are", result);
            } catch (error) {
                console.log("description error", error);
                setLoading(false);
            }
            finally {
                setLoading(false);
            }
        }
        fetchdescribe();
    }, []);

    return (
        <div>
            <div>
                <HeaderRoute showschool={showschool} setshowschool={setshowschool} />
                <div className='flex items-center mt-[16vw] mb-[10vw] justify-center flex-col gap-[6vw]'>
                    <div className='flex flex-col gap-[3vw] '>
                        <div className='items-center justify-center flex text-center'>
                            <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Admission</button>
                        </div>
                        <div className='items-center justify-center flex text-center'>
                            <button className='py-[1.7vw] w-[56vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Postgraduate</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4vw] items-center'>
                        <div className='flex items-center gap-[2.5vw]'>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledate}>Dates</button>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handledocuments}>Documents</button>
                            <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefaq}>FAQ</button>

                        </div>
                        <div className='flex flex-col items-center gap-[4vw]'>
                            <div className='flex items-center gap-[2.5vw]'>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefluid}>Fluids Students</button>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefee}>Fees</button>
                                <button className='py-[1.7vw] px-[3vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlexam}>Exams</button>
                            </div>
                            <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigateunder}>Undergraduate</button>
                        </div>
                    </div>

                    {/* <button className='py-[1.9vw] w-[55vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlenavigatecontact}>Contacts</button> */}
                    <div className='flex flex-col items-center gap-[3vw]'>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Rankings</button>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2' onClick={handlefees}>Useful links</button>
                        <button className='py-[1.5vw] w-[57vw] border-[#9f5942] rounded-[2vw] text-[4.2vw] border-2'>Terms of use</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
