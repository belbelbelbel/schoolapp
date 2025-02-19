import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { Footer } from './components/Footer'

export const Links = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [isloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [links, setlinks] = useState(false)
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "", university: "", name: "", url: "" });
    const accesstokena = Cookies.get('token')
    useEffect(() => {
        const handlefaq = async () => {
            setisloading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/links`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });
                const result = await res.json();
                // console.log(result);
                setfaqs(result.relevantLinks[0]);
            } catch (error) {
                // console.log(error);
            } finally {
                setisloading(false);
            }
        };
        handlefaq();
    }, [params.universityid, accesstokena]);

    return (
        <div className='pt-[1rem] h-[100dvh] flex flex-col justify-between'>
            <div className='w-[90%] text-center mx-auto flex flex-col gap-[2vw]'>
                <div id="firsts"></div>
                <div className="flex items-ceneter justify-between px-[6vw]">
                    <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                    <div className="flex items-center gap-[2vw]">
                        <div> <img src="/edit button.svg" alt="edit" /></div>
                        <div> <img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='w-full mx-auto'>
                    <div>
                        <div className='flex flex-col  gap-[7vw]'>
                            <div className='items-center justify-center flex text-center pt-[5vw]'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Links</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    !isloading ? (
                        <div className='flex flex-col gap-[2vw] pt-[1rem] align-items justify-center text-center'>
                            <h1 className='font-bold'>{faqs.name} :-</h1>
                            <div className='  mx-auto text-[4.5vw]'>
                                <div>
                                    <a href={faqs.url} target='_blank' rel='noopener noreferrer'>Click For More</a>
                                </div>
                            </div>
                        </div>
                    ) : (<div className='flex align-items pt-[2.5rem] justify-center'>
                        <div className='dots-styles'></div>
                    </div>)
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
