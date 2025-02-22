import "../../../Styles/VerifyModal.css"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
export const VerifyModal = () => {
    const navigate = useNavigate()
    return (
        <div className="verify_cont">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -100 }}
                className="verify_cont2">
                <div>
                    <div style={{ fontFamily: "cursive", color: "#121212", fontSize: "6.6vw", letterSpacing: "1vw",fontWeight:"600" }}>Congratulations</div>
                </div>
                <div style={{ fontFamily: "FilsonPro-Medium, sans-serif", letterSpacing: "1px" }}>You are a member now 😎</div>
                <button style={{ padding: "3vw 15vw", color: "white", border: "none", boxShadow: "0px 2px 4px 2px gray", borderRadius: "2vw", fontSize: "4vw", backgroundColor: "#96523b" }} onClick={()=>navigate("/signin") }>Get started</button>
            </motion.div>
        </div>
    )
}
