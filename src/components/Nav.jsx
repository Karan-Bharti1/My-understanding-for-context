
import { Link } from "react-router-dom"
import { useReviewContext } from "../contexts/ReviewContext"
import ReviewCounter from "./ReviewCounter"


  const Nav=()=>{
  const {reviewItems}=useReviewContext()
return(
    <nav className="d-flex justify-content-between container py-2">
      <div className="fw-bold fs-4">Reviewer</div>
      <div className="nav">
        <Link className="nav-link" to="/">Report</Link>
        <Link className="nav-link" to="/pending">Pending (<ReviewCounter />)</Link>
        <Link className="nav-link" to="/review">Review</Link>
      </div>
      
    </nav>
)
}
export default Nav