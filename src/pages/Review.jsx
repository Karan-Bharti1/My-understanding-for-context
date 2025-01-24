import { useContext } from "react"
import ReviewContext, { useReviewContext } from "../contexts/ReviewContext"
import Nav from "../components/Nav"

function Review(){
    const {reviewItems,toggleReview}=useReviewContext()
return(
    <div className='container'>
        <Nav/>
        <h1>To Review</h1>
        <p className='fs-4'>Reviewed: {reviewItems.filter(item=>item.isReviewed).length}</p>
        <ul>
          {reviewItems.map((item) => (
            <li
            style={{textDecoration: item.isReviewed?"line-through":"none",cursor:"pointer"}}
              key={item.url}
              onClick={() => toggleReview(item.url)}
            >
              {item.url} - {item.isReviewed ? 'Reviewed' : 'Pending'}
            </li>
          ))}
        </ul>
        </div>
)
}
export default Review