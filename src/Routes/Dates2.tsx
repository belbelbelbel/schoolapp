import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Loading } from './Loading'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Dates2 = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [depart, setdepart] = useState([]) 
    const accesstoken = localStorage.getItem('token');
    const [siloading, setisloading] = useState(false);
    const [show, setshow] = useState(false);
    const [searchs, setsearchs] = useState({ name: "" });
    const [faqs, setfaqs] = useState({ question: "", answer: "" });
    const [dates, setdates] = useState("")
    const accesstokena =  Cookies.get('token')

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`,{
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                })
                const results = await res.json()
                console.log(results)
                console.log(results[0].programs)
                console.log(results[0].programs)
                console.log(results[0].programs[1])
                setdepart(results[0].programs)
                console.log(results[0].dates)
                setdates(results[0].dates)
                // console.log(results.university.schools)
                if (!res.ok) {
                    throw new Error("error parsing json")
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setloading(false)
            }
        }
        fetchData();
    }, [])
    
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
                                        <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Dates</button>
                                    </div>
                                    <div>
                                        {dates}
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