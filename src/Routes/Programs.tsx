import React, { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { useParams } from 'react-router-dom'
interface props {
    name:string
    programs:string[]
}
export const Programs = () => {
    const params = useParams()
    const [prog,setprog] = useState<props>({name: '', programs:[]})
    const [depart, setdepart] = useState({name:''})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res =  await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`)
                const results = await res.json()
                console.log(results[0].programs[0])
                setdepart(results[0].programs[0])
                setprog(results[0])
                console.log(results[0])
                // console.log(results.university.schools)
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
            <div>
                {
                    prog.name
                }
            </div>
            <div>
               {
                depart.name
 
               }
            </div>
            <Footer />
        </div>
    )
}
