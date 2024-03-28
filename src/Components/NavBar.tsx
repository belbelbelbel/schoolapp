import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <div>
                <Link to="/signup"><button>signup</button></Link>
                <Link to="/Signin"><button>Signin</button></Link>
                <button>signin</button>
            </div>
        </div>
    )
}

export default NavBar