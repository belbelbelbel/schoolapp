import React from 'react';
import { motion } from "framer-motion";

type ReasonProps = {
    setreason: (reason: string) => void;
};

const nigeriaStates = [
    "Abia", "Adamawa", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River State", "Delta State", "Ebonyi", "Edo State", "Ekiti",
    "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi",
    "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
    "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
    "Federal Capital Territory (FCT)"
];

export const ReasonsModal: React.FC<ReasonProps> = ({ setreason }) => {
    return (
        <div className='schoolmodal'>
            <div className='schoolmodalp'>Select your school location</div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -100 }}
                className='schoolmodal2'
            >
                {nigeriaStates.map((state) => (
                    <div key={state} onClick={() => setreason(state)}>
                        {state}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
