import { Link } from "react-router-dom"

const Nav=()=>{
return(
    <nav className="d-flex justify-content-between container py-2">
      <div className="fw-bold fs-4">Reviewer</div>
      <div className="nav">
        <Link className="nav-link" to="/">Report</Link>
        <Link className="nav-link" to="/pending">Pending</Link>
        
      </div>
      
    </nav>
)
}
export default Nav