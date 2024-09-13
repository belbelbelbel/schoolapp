import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import "../Styles/Sidebar.css";
import { start } from 'repl';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Provider/Usecontext';
import { FaSearchPlus } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import Cookies from 'js-cookie';
interface SidebarProps {
    shownavbar: boolean;
    setshownavbar: (value: boolean) => void;
}
const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 15 }
};
export const Sidebar = ({ shownavbar, setshownavbar }: SidebarProps) => {
    const user = useContext(Context)
    const navigate = useNavigate()
    const stopPropagation = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    };
    const handleLogout = () => {
        localStorage.removeItem('token');
        Cookies.remove('token');
        user?.setIsLoggedIn(false);
        user?.setformdata({
            ...user.formdata,
            email: "",
            password: "",
        })
        navigate('/signin');
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
                                // staggerDirection: -1,
                                ease: 'linear'
                            }
                        }
                    }}
                >
                    <div className='space'>
                        <div className='' style={{ display: "flex", gap: "0rem", alignItems: "center" }}><div style={{ color: "rgba(11, 60, 73, 1)" }}>Llma</div><div style={{ color: "#7a4a3a" }}>QUIN</div><div style={{ color: "rgba(11, 60, 73, 1)" }}></div></div>
                        {shownavbar && <RxCross1 size="6vw" onClick={() => setshownavbar(false)} />}
                    </div>
                    <div className='w-[50%] font-sans' onClick={stopPropagation} style={{ display: 'flex', fontSize: "4.5vw", flexDirection: 'column', alignItems: 'start', gap: "15vw" }}>
                        {/* <motion.li variants={itemVariants}>
                            <div style={{ display: "flex", gap: "1rem",fontSize:"4vw" }}> <SiGnuprivacyguard />
                                <Link to="/signup">Signup</Link>
                            </div>
                        </motion.li> */}
                        <motion.li variants={itemVariants}>
                            <div style={{ display: "flex", gap: "1rem", fontSize: "4vw" }}> <FcAbout color='black' />
                                <Link to="/about">About Us</Link>
                            </div>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <div style={{ display: "flex", gap: "1rem", fontSize: "4vw" }}> <FaSearchPlus />
                                <Link to="/school">Search</Link>
                            </div>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <div style={{ display: "flex", gap: "1rem", fontSize: "4vw" }}> <MdDashboard />
                                <Link to="/preschool">Dashboard</Link>
                            </div>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <div style={{ display: "flex", gap: "1rem", fontSize: "4vw" }}> <IoCall />
                                <Link to="/contactus">Contact Us</Link>
                            </div>
                        </motion.li>
                        <motion.li variants={itemVariants} onClick={handleLogout}>
                            <div style={{ display: "flex", gap: "1rem", fontSize: "4vw" }}> <FiLogOut />
                                <a>Logout</a>
                            </div>
                        </motion.li>

                    </div>
                </motion.ul>
            </div>
        </div>
    );
};
