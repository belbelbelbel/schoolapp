import "../Styles/Nopage.css"
import Lottie from "lottie-react"
import animatedData from "../Styles/Nopage.json"
const Nopage = () => {
  return (
    <div className="page_no">
        <h1>NO PAGE FOUND</h1>
        <div>
          <Lottie animationData={animatedData} ></Lottie>
        </div>
    </div>
  )
}

export default Nopage