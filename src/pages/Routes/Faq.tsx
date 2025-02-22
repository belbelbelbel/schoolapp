import { Skeleton } from '@mui/material'
import { motion } from 'framer-motion'
import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const Faq = () => {
  const navigate = useNavigate()
  const params = useParams();
  const [siloading, setisloading] = useState(false);
  const [show, setshow] = useState(false);
  const [searchs, setsearchs] = useState({ name: "" });
  const [faqs, setfaqs] = useState({ question: "", answer: "" });
  const accesstokena = Cookies.get('token')

  useEffect(() => {
    const handlefaq = async () => {
      setisloading(true);
      try {
        const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/university/${params.universityid}/faq`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accesstokena}`,
          }
        });
        const result = await res.json();
        // console.log(result);
        // console.log(result.faq[0]);
        setfaqs(result.faq[0]);
      } catch (error) {
        // console.log(error);
      } finally {
        setisloading(false);
      }
    };
    handlefaq();
  }, [params.universityid, accesstokena]);

  const handletoglr = () => {
    setshow(!show);
  };

  return (
    <div className='pt-[2rem] h-[100dvh] flex flex-col'>
      <div>
        <div id="firsts"></div>
        <div className="flex items-ceneter justify-between px-[6vw]">
          <div style={{ cursor: "pointer" }}>  </div> <div style={{ width: "75vw" }}><BiArrowBack className='text-[5.2vw]' onClick={() => navigate(-1)} /></div>
          <div className="flex items-center gap-[2vw]">
            <div> <img src="/edit button.svg" alt="edit" /></div>
            <div> <img src="/Vector (4).svg" alt="flag" /></div>
          </div>
        </div>
        <div className='w-full mx-auto'>
          <div>
            <div className='flex flex-col  gap-[7vw]'>
              <div className='items-center justify-center flex text-center pt-[5vw]'>
                <button className='py-[1.7vw] w-[63vw] bg-gradient-to-l from-[#9f5942] via-red-900 to-gray-900 text-white rounded-[2vw] text-[4.2vw] border-none'>FAQ</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='faqcont pt-[2rem]'>
            {siloading ? (
              <div className='flex justify-center items-center text-center'>
                <div className='dots-styles'>
                </div>
              </div>
            ) : (
              <>
                <div className=' font-bold ' style={{ display: "flex", gap: "2vw" ,alignItems:"center",textAlign:"center",justifyContent:"center"}} >
                  <div className='font-bold text-[4vw] w-[70%]'>{faqs.question}</div>
                  <div onClick={handletoglr}>
                    {!show ? (
                      <IoMdArrowDropup onClick={handletoglr} style={{ fontSize: "6vw" }} />
                    ) : (
                      <IoMdArrowDropdown onClick={handletoglr} style={{ fontSize: "6vw" }} />
                    )}
                  </div>
                </div>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0 }, y: 0 }}
                    className='faqans flex items-center justify-center text-center font-medium text-[3vw] pt-[1rem]'
                  >
                    {faqs.answer}
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
