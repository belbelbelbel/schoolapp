import React from 'react'
import "../Styles/Documents.css"
import { useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
export const Documents = () => {
  const navigate = useNavigate()
  const handlelback = () => {
    navigate(-1)
  }
  return (
    <div className='document_container'>
      <div id="firsts"></div>
      <div className="Undercover_container" >
        <div className='Undercover_containera'>  <img src="/Arrow (2).svg" alt="goback" onClick={handlelback} width="25vw" /></div>
        <div className="Undercover_containerb">
          <div> <img src="/edit button.svg" alt="edit" /></div>
          <div> <img src="/Vector (4).svg" alt="flag" /></div>
        </div>
      </div>
      <div className="Undercover_container4">
        <h1>Documents</h1>
      </div>
      <div className='documents'>
        <div>Statement of purpose</div>
        <div>Birth certificate</div>
        <div>Sponorship letter</div>
        <div>Passport photograph</div>
        <div>Reference letters</div>
        <div>Online applications</div>

      </div>
      {/* <Footer/> */}
    </div>
  )
}