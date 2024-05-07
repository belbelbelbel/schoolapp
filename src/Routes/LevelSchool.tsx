import React from 'react'
import { motion } from "framer-motion"
type levelprops = {
  setlevel: (level: string) => void
}
export const LevelSchool = ({ setlevel }: levelprops) => {
  const handlelevel = (level: string) => {
    setlevel(level)
  }
  return (
    <motion.div className='schoolmodal'>
       <div className='schoolmodalp'>Select your current class/level</div>
      <motion.div className='schoolmodal2'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 100 }}>
        <div onClick={() => handlelevel("JSS1")}>JSS1</div>
        <div onClick={() => handlelevel("JSS2")}>JSS2</div>
        <div onClick={() => handlelevel("JSS3")}>JSS3</div>
        <div onClick={() => handlelevel("SSS1")}>SSS1</div>
        <div onClick={() => handlelevel("SSS2")}>SSS2</div>
        <div onClick={() => handlelevel("SSS3")}>SSS3</div>
        <div onClick={() => handlelevel("Awaiting Admission")}>Awaiting Admission</div>
        <div onClick={() => handlelevel("100 Level")}>100 Level</div>
      </motion.div>
    </motion.div>
  )
}