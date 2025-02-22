import React from 'react';
import { motion } from "framer-motion";

type LevelProps = {
  setlevel: (level: string) => void;
};

const levels = [
  "JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3",
  "Awaiting Admission", "100 Level"
];

export const LevelSchool: React.FC<LevelProps> = ({ setlevel }) => {
  return (
    <motion.div className='schoolmodal'>
      <div className='schoolmodalp'>Select your current class/level</div>
      <motion.div 
        className='schoolmodal2'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: -100 }}
      >
        {levels.map((level) => (
          <div key={level} onClick={() => setlevel(level)}>
            {level}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
