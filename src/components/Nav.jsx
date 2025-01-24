import { useContext } from "react"
import { Link } from "react-router-dom"
import ReviewContext from "../contexts/ReviewContext"

const Nav=()=>{
  const {initialItems}=useContext(ReviewContext)
return(
    <nav className="d-flex justify-content-between container py-2">
      <div className="fw-bold fs-4">Reviewer</div>
      <div className="nav">
        <Link className="nav-link" to="/">Report</Link>
        <Link className="nav-link" to="/pending">Pending ({initialItems.filter(item=>!item.isReviewed).length}/{initialItems.length})</Link>
        
      </div>
      
    </nav>
)
}
export default Nav