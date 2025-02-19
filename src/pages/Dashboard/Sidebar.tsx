import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { Context } from '../../Provider/Usecontext';
import { FaSearchPlus } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { SiGnuprivacyguard } from 'react-icons/si';
import { MdDashboard } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import '../../Styles/Sidebar.css';

interface SidebarProps {
    shownavbar: boolean;
    setshownavbar: (value: boolean) => void;
}

const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 15 }
};

export const Sidebar = ({ shownavbar, setshownavbar }: SidebarProps) => {
    const user = useContext(Context);
    const navigate = useNavigate();

    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        Cookies.remove('token');
        user?.setIsLoggedIn(false);
        user?.setformdata(prev => ({ ...prev, email: '', password: '' }));
        navigate('/signin');
    };

    return (
        <div className='z-50 relative' onClick={() => setshownavbar(false)}>
            <motion.ul
                id="navbar"
                className={shownavbar ? 'navbar active' : 'navbar'}
                initial="hidden"
                animate={shownavbar ? 'visible' : 'hidden'}
                variants={{
                    hidden: { right: '-100vw' },
                    visible: {
                        right: 0,
                        transition: { staggerChildren: 0.14, delayChildren: 0.2, ease: 'linear' }
                    }
                }}
                onClick={stopPropagation}
            >
                <div className='flex items-center justify-between w-[80%] mx-auto mb-4'>
                    <div className='flex gap-0 items-center'>
                        <span className='text-primary'>Alma</span>
                        <span className='text-accent'>QUIN</span>
                    </div>
                    {shownavbar && <RxCross1 size='6vw' onClick={() => setshownavbar(false)} />}
                </div>

                <div className='w-[50%] font-sans flex flex-col items-start text-[4.5vw] gap-[15vw]'>
                    {[{ icon: <FcAbout size={18} />, label: 'About Us', link: '/about' },
                      { icon: <FaSearchPlus size={18} />, label: 'Search', link: '/school' },
                      { icon: <MdDashboard size={18} />, label: 'Dashboard', link: '/preschool' },
                      { icon: <IoCall size={18} />, label: 'Contact Us', link: '/contactus' }
                    ].map(({ icon, label, link }) => (
                        <motion.li key={label} variants={itemVariants}>
                            <Link to={link} className='flex items-center gap-4 text-[4vw]'>
                                {icon} {label}
                            </Link>
                        </motion.li>
                    ))}

                    <motion.li variants={itemVariants} onClick={handleLogout} className='flex items-center gap-4 text-[4vw] cursor-pointer'>
                        <FiLogOut size={18} /> Logout
                    </motion.li>
                </div>
            </motion.ul>
        </div>
    );
};
