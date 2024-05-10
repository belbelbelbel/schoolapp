import React from 'react'
import { motion } from "framer-motion"
type reasonprops = {
    setreason: (reason: string) => void
}
export const ReasonsModal = ({ setreason }: reasonprops) => {
    const handlereason = (reason: string) => {
        setreason(reason)
    }
    return (
        <div className='schoolmodal'>
             <div className='schoolmodalp'>Select your school location</div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, y: -100 }}
                className='schoolmodal2'>
                <div onClick={() => handlereason("Abia")}>Abia</div>
                <div onClick={() => handlereason("Adamawa")}>Adamawa</div>
                <div onClick={() => handlereason("Anambra")}>Anambra</div>
                <div onClick={() => handlereason("Bauchi")}>Bauchi</div>
                <div onClick={() => handlereason("Bayelsa")}>Bayelsa</div>
                <div onClick={() => handlereason("Benue")}>Benue</div>
                <div onClick={() => handlereason("Borno")}>Borno</div>
                <div onClick={() => handlereason("Cross River State")}>Cross River State</div>
                <div onClick={() => handlereason("Delta State")}>Delta State</div>
                <div onClick={() => handlereason("Ebonyi")}>Ebonyi</div>
                <div onClick={() => handlereason("Edo State")}>Edo state</div>
                <div onClick={() => handlereason("Ekiti")}>Ekiti</div>
                <div onClick={() => handlereason("Enugu")}>Enugu</div>
                <div onClick={() => handlereason("Gombe")}>Gombe</div>
                <div onClick={() => handlereason("Imo")}>Imo</div>
                <div onClick={() => handlereason("Jigawa")}>Jigawa</div>
                <div onClick={() => handlereason("Kaduna ")}>Kaduna</div>
                <div onClick={() => handlereason("Kano")}>Kano</div>
                <div onClick={() => handlereason("Kastina")}>Kastina</div>
                <div onClick={() => handlereason("Kebbi")}>Kebbi</div>
                <div onClick={() => handlereason("Kogi")}>Kogi</div>
                <div onClick={() => handlereason("Kwara")}>Kwara</div>
                <div onClick={() => handlereason("Lagos")}>Lagos</div>
                <div onClick={() => handlereason("Nasarawa")}>Nasarawa</div>
                <div onClick={() => handlereason("Niger")}>Niger</div>
                <div onClick={() => handlereason("Ogun")}>Ogun</div>
                <div onClick={() => handlereason("Ondo")}>Ondo</div>
                <div onClick={() => handlereason("Osun")}>Osun</div>
                <div onClick={() => handlereason("Oyo")}>Oyo</div>
                <div onClick={() => handlereason("Plateau")}>Plateau</div>
                <div onClick={() => handlereason("Rivers")}>Rivers</div>
                <div onClick={() => handlereason("Sokoto")}>Sokoto</div>
                <div onClick={() => handlereason("Taraba")}>Taraba</div>
                <div onClick={() => handlereason("Yobe")}>Yobe</div>
                <div onClick={() => handlereason("Zamfara")}>Zamfara</div>               
                <div onClick={() => handlereason("Federal Capital Territory (FCT)")}>Federal Capital Territory (FCT)</div>               
            </motion.div>
        </div>
    )
}
