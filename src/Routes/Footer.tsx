import React from 'react'
import "../Styles/Footer.css"
export const Footer = () => {
    const scrollastold = (sectionid: string) => {
        const section = document.getElementById(sectionid)
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className='Undercover_container9'>
            <div className='Undercover_container10'>
                <div className='Undercover_container10a'><img src="/color_logo_transparent.svg" alt="4retrfw" width="170vw" /></div>
                <div onClick={() => scrollastold('firsts')} className='top'>Back to top</div>
            </div>
            <div className='Undercover_container11'>
                <div>
                    <div className='eze'>Terms of Use</div>
                    <div>Information presented here is<br />purely for reference purposes <br />and may have changed after <br />the page was updated. Users are<br />admonished to do further research<br />to get the most up to date information.<br />Click on the 󠅁π symbol to flag information<br />as incorrect or incomplete. Click on ↓ to<br />make modification to unlocked content.</div>
                </div>
                <div>
                    <div>Page creator: Uncle Simple<br />Page created: MAY9/2022<br />Last updated: MAY11/2022 by…</div>
                </div>
            </div>
            
        </div>
    )
}

