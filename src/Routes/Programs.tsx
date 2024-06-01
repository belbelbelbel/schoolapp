import React, { useEffect, useState } from 'react'
import { Footer } from './Footer'
import "../Styles/Programs.css"
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from './Loading'
interface props {
    name: string
    programs: string[]
}
export const Programs = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [prog, setprog] = useState<props>({ name: '', programs: [] })
    const [loading, setloading] = useState(false)
    const [depart, setdepart] = useState([])
    const accessToken = localStorage.getItem('token')
    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`,{
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                        "Authorization": `Bearer ${accessToken}`,
                    }
                })
                const results = await res.json()
                console.log(results[0].programs)
                console.log(results[0].programs)
                console.log(results[0].programs[1])
                setdepart(results[0].programs)
                setprog(results[0])
                console.log(results[0])
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
    const handlelback = () => {
        navigate(-1)
    }
    return (
        <div className='prog_cont'>
            {
                loading ? <h1><Loading /></h1> :

                    <div className='prog_cont2'>
                        <div id="firsts"></div>
                        <div className="Undercover_container" >
                            <div className='Undercover_containera'>  <img src="/Arrow (2).svg" alt="" onClick={handlelback} width="25vw" /></div>
                            <div className="Undercover_containerb">
                                <div> <img src="/edit button.svg" alt="wearfs" /></div>
                                <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                            </div>
                        </div>
                        {/* <div className="Undercover_container2">
                            <div className="Undercover_container3">
                                <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                                <div className="Covenant_container_input">  <input type="text" placeholder="Search here" /></div>
                            </div>
                            <div><img src="/Search.svg" alt="whasf" /></div>
                        </div> */}
                        <div className='prog_cont3'>
                            <div>
                                <div>
                                    <h3>{prog.name}</h3>
                                </div>
                                <div className='Undercover_container5'>
                                    <div><p>Brief overview of the<br /> college. </p></div>
                                    <div className='Undercover_container6'>
                                        <img src="/Ellipse 2.svg" alt="wesafa" />
                                        <img src="/Ellipse 3.svg" alt="weafasd" />
                                        <img src="/Ellipse 4.svg" alt="weadsfa" />
                                    </div>
                                </div>
                                <div style={{position:"relative",gap:"3vw"}}>
                                    <div className='grams'> Programs</div>
                                    <div className='h5-container'>
                                        {/* <h5>{depart.name}</h5> */}
                                        {
                                            depart.map((pro: {
                                                name: React.ReactNode
                                                certs: string[]
                                            }) => (
                                                <div className="h5-cont2">
                                                    <div className="">
                                                        <h4>{pro.name}</h4>
                                                    </div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
                                                        <h5 >Degree:-</h5>
                                                        {
                                                            pro.certs.map((cert, index: any) => (
                                                                <div key={index}>
                                                                    <div >

                                                                        <h6 style={{ fontWeight: "400" }}>{cert}</h6>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </div>
    )
}
