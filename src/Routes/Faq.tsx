import React, { useEffect, useState } from 'react'
import "../Styles/Faq.css"
import { useParams } from 'react-router-dom'
import { Footer } from './Footer'
export const Faq = () => {
    const params = useParams()
    const accesstoken = localStorage.getItem('token')
    const [searchs, setsearchs] = useState({ name: "" })
    const [faqs, setfaqs] = useState({ question: "", answer: "" })
    useEffect(() => {
        const handlefaq = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/faq`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                })
                const result = await res.json()
                console.log(result)
                console.log(result.faq[0])
                setfaqs(result.faq[0])
            } catch (error) {
                console.log(error)
            }
        }
        handlefaq()
    })
    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                })
                const result = await res.json()
                // console.log(result)
                setsearchs(result)
                if (!res.ok) {
                    throw new Error("error occured in the dexcription")
                }
            }
            catch (error) {
                console.log("description error", error)
            }
        }
        fetchdescribe()
    }, [])
    return (
        <div className='faq1'>
            <div className='faq2'>
                <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                    <div className="Undercover_container" >
                        <div className='Undercover_containera'>  <img src="/Arrow (2).svg" alt="" width="25vw" /></div>
                        <div className="Undercover_containerb">
                            <div> <img src="/edit button.svg" alt="wearfs" /></div>
                            <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <h2>{searchs.name}</h2>
                        <div className='Undercover_container5'>
                            <div><p>Frequently Asked <br />  Questions </p></div>
                            <div className='Undercover_container6'>
                                <img src="/Ellipse 2.svg" alt="wesafa" />
                                <img src="/Ellipse 3.svg" alt="weafasd" />
                                <img src="/Ellipse 4.svg" alt="weadsfa" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grams'>FAQ</div>

                </div>
                <div className='faqcont'>
                    <div className='faqques'>{faqs.question}</div>
                    <div className='faqans'>{faqs.answer}</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
