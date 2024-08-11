import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'

interface props {
    name: string
    programs: string[]
}
export const ProgramPost = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [prog, setprog] = useState<props>({ name: '', programs: [] })
    const [loading, setloading] = useState(false)
    const [depart, setdepart] = useState([])
    const accesstokena = Cookies.get('token')
    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/postgraduate`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                })
                const results = await res.json()
                // console.log(results)
                // console.log(results[0].programs)
                // console.log(results[0].programs)
                // console.log(results[0].programs[1])
                setdepart(results[0].programs)
                setprog(results[0])
                // console.log(results[0].dates)
                // console.log(results.university.schools)
                if (!res.ok) {
                    throw new Error("error parsing json")
                }
            } catch (error) {
                // console.log(error)
            }
            finally {
                setloading(false)
            }
        }
        fetchData();
    }, [])
    const handlelback = () => {
        navigate(-1)
    }
  return (
    <div className='prog_cont'>
    {
        loading ? <h1><Loading /></h1> :

            <div className='prog_cont2 pt-[2rem]'>
                <div id="firsts"></div>
                <div className="flex items-ceneter justify-between px-[6vw]">
                <div style={{ cursor: "pointer" }}>  </div> <div style={{width: "75vw"}}><BiArrowBack className='text-[5.2vw]' onClick={handlelback}/></div>
                    <div className="flex items-center gap-[2vw]">
                        <div> <img src="/edit button.svg" alt="edit" /></div>
                        <div> <img src="/Vector (4).svg" alt="flag" /></div>
                    </div>
                </div>
                <div className='w-[86%] mx-auto'>
                    <div>
                        <div className='flex flex-col  gap-[7vw]'>
                            <div className='items-center justify-center flex text-center pt-[5vw]'>
                                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>Department</button>
                            </div>
                            <div className='flex flex-col  gap-[5vw]'>
                                {/* <h5>{depart.name}</h5> */}
                                {
                                    depart.map((pro: {
                                        name: React.ReactNode
                                        certs: string[]
                                    }) => (
                                        <div className="">
                                            <div className="font-bold text-[4vw]">
                                                <h4>{pro.name}</h4>
                                            </div>

                                            <div className='flex gap-[1vw]'>
                                                {pro.certs.map((cert, index: any) => (
                                                    <div key={index} className=''>
                                                        <div className='break-words'>{cert}</div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    ))
                                }

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
