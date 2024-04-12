import "../Styles/Nopage.css"
import Lottie from "lottie-react"
import animatedData from "../Styles/Nopage.json"
import { NavLink } from "react-router-dom"
const Nopage = () => {
  return (
    <div className="containerss">
      <div className="containersss">
      <div style={{width:"30vw",  textAlign:"center"}}>
          <Lottie animationData={animatedData} ></Lottie>
        </div>
        <h2>Opps's Page not found</h2>
        <h1>404</h1>
        <p>We can't find the page you are lookin for</p>
        <NavLink to="/">go back home</NavLink>
       
      </div>
    </div>
  )
}

export default Nopage