import { Link } from "react-router-dom"

const Nav=()=>{
return(
    <nav className="d-flex justify-content-between container py-2">
      <div className="fw-bold fs-4">App</div>
      <div className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        
      </div>
      
    </nav>
)
}
export default Nav