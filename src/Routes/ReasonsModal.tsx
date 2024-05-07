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
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, x: 100 }}
                className='schoolmodal2'>
                <div onClick={() => handlereason("Abia")}>Abia</div>
                <div onClick={() => handlereason("Anambra")}>Anambra</div>
                <div onClick={() => handlereason("Bauchi")}>Bauchi</div>
                <div onClick={() => handlereason("Benue")}>Benue</div>
                <div onClick={() => handlereason("Borno")}>Borno</div>
                <div onClick={() => handlereason("Cross River State")}>Cross River State</div>
                <div onClick={() => handlereason("Delta State")}>Delta State</div>
                <div onClick={() => handlereason("Enugu")}>Enugu</div>
                <div onClick={() => handlereason("Edo State")}>Edo state</div>
                <div onClick={() => handlereason("Lagos")}>Lagos</div>
                <div onClick={() => handlereason("Kano")}>Kano</div>
            </motion.div>
        </div>
    )
}
