import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import "../Styles/Sidebar.css";

interface SidebarProps {
    shownavbar: boolean;
    setshownavbar: (value: boolean) => void;
}

const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 15 }
};

export const Sidebar = ({ shownavbar, setshownavbar }: SidebarProps) => {
    const stopPropagation = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    };

    return (
        <div className='z-50 relative'>
            <div onClick={() => setshownavbar(false)}>
                <motion.ul
                    id="navbar"
                    className={`${shownavbar ? '#navbar active' : '#navbar'}`}
                    initial="hidden"
                    animate={shownavbar ? 'visible' : 'hidden'}
                    variants={{
                        hidden: { right: '-100vw' },
                        visible: {
                            right: 0,
                            transition: {
                                staggerChildren: 0.14,
                                delayChildren: 0.2,
                                staggerDirection: -1,
                                ease: 'linear'
                            }
                        }
                    }}
                >
                    <div className='flex justify-between items-center w-full px-[1rem] flex-row'>
                        <div className='text-[1rem] text-[#212121] cursor-pointer font-black'>CoUpOnS</div>
                        {shownavbar && <RxCross1 size="6vw" onClick={() => setshownavbar(false)} />}
                    </div>
                    <div className='w-[27%] font-sans' onClick={stopPropagation}>
                        <motion.li variants={itemVariants}><a href="index.html">Join</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Shop</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Blog</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">About</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                    </div>
                </motion.ul>
            </div>
        </div>
    );
};
