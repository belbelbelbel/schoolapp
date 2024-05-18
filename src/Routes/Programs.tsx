import React, { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { useParams } from 'react-router-dom'

export const Programs = () => {
    const params = useParams()
    const [prog,setprog] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://almaquin-rua7.onrender.com/api/university/${params.universityid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                  
                })
                const results = await res.json()
                console.log(results)
                console.log(results.university.schools)
                if(!res.ok) {
                    throw new Error ("error parsing json")
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData(); 
    }, []) 

    return (
        <div>
            <Footer />
        </div>
    )
}
