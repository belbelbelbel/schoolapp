import React, { useEffect, useState } from 'react'
import "../Styles/Footer.css"
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Footer = () => {
    const [footerUpdate, setFooterUpdate] = useState<any>({})
    const params = useParams()
    const accesstokena = Cookies.get('token');

    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstokena}`,
                    }
                });

                const result = await res.json();
                setFooterUpdate(result.university);

                if (!res.ok) {
                    // throw new Error("Error occurred in the description");
                }
            } catch (error) {
                // console.error("Description error", error);
            }
        }
        fetchdescribe();
    }, [params.universityid, accesstokena]);

    // Function to format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='w-screen relative'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col ml-3 w-full items-start'>
                    <div className='flex items-center gap-2 text-[3vw]'>
                        <div>Page Creator:</div>
                        <div>{footerUpdate?.pageCreator}</div>
                    </div>
                    <div className='flex items-start gap-2 text-[3vw]'>
                        <div>Page Created:</div>
                        <div>{footerUpdate?.dateAdded ? formatDate(footerUpdate.dateAdded) : 'N/A'}</div>
                    </div>
                    <div className='flex items-start gap-2 text-[3vw]'>
                        <div>Last Updated:</div>
                        <div>{footerUpdate?.dateModified ? formatDate(footerUpdate.dateModified) : 'N/A'}</div>
                    </div>
                </div>
                <div className=' outline-0 border-0 items-end justify-end w-[70%]'>
                    <img src="/logoctf.jpg" alt="footer-logo" />
                </div>
            </div>
        </div>
    );
}
