import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'
import { BiArrowBack } from 'react-icons/bi'

interface props {
    name: string
    programs: string[]
}

export const Contact2 = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [loadingContact, setLoadingContact] = useState(true);
    const [loading, setloading] = useState(false)
    const [cont, setcont] = useState({ phone: "", email: "" })
    const accesstokena = Cookies.get('token')

    useEffect(() => {
        const handlecontact = async () => {
            const res = await fetch("https://almaquin.onrender.com/api/contact", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${accesstokena}`,
                },
            });
            const result = await res.json();
            console.log(result);
            setcont(result)
            setLoadingContact(false);
        };
        handlecontact();
    }, [accesstokena]);

    return (
        <div className='prog_cont'>
            {
                loading ? <h1><Loading /></h1> :

                    <div className='prog_cont2 pt-[2rem]'>
                        <div id="firsts"></div>
                        <div className="flex items-ceneter justify-between px-[6vw]">
                            <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
                            <div className="flex items-center gap-[2vw]">
                                <div> <img src="/edit button.svg" alt="edit" /></div>
                                <div> <img src="/Vector (4).svg" alt="flag" /></div>
                            </div>
                        </div>
                        <div className='w-[86%] mx-auto'>
                            <div>
                                <div className='flex flex-col  gap-[7vw]'>
                                    <div className='items-center justify-center flex text-center pt-[5vw]'>
                                        <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Contacts</button>
                                    </div>
                                    <div className='flex flex-col  gap-[5vw]'>
                                        {/* <h5>{depart.name}</h5> */}
                                        <div className='flex flex-col  gap-[1.5vw]'>
                                            <div className='font-bold text-[4vw]'>Email</div>
                                            <div>{cont.email}</div>
                                        </div>
                                        <div className='flex flex-col  gap-[1.5vw]'>
                                            <div className='font-bold text-[4vw]'>Phone number</div>
                                            <div>{cont.phone}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
            }
        </div>
    )
}
