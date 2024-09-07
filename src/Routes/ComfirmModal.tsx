import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface confirmprops  {
    setshow: (show:boolean) => void
}
export const ComfirmModal = ({setshow}:confirmprops) => {
    const stopPropagation = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    };
    const navigate = useNavigate()
    return (
        <div className='verify_cont' onClick={()=> setshow(false)}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -100 }}
                className="verify_cont2" style={{ textAlign: "center"}}
                onClick={stopPropagation}>
                <div>
                    <div style={{ fontFamily: "cursive", color: "#121212", fontSize: "5.6vw", letterSpacing: "0.8vw", fontWeight: "700" }}>You are a step ahead</div>
                </div>
                <div style={{ fontFamily: "sans-serif", letterSpacing: "1px",width:"92%",margin:"0rem auto" }}>A magic link  is sent to your email  for password reset</div>
                <button style={{ padding: "3vw 15vw", color: "white", border: "none", boxShadow: "0px 2px 4px 2px gray", borderRadius: "2vw", fontSize: "4vw", backgroundColor: "#96523b",letterSpacing: "0.4vw", }} onClick={() => setshow(false)}>Ok</button>
            </motion.div>
        </div>
    )
}
