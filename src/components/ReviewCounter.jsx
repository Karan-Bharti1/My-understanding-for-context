import useReviewContext from "../contexts/ReviewContext"

function ReviewCounter(){
    const {reviewItems}=useReviewContext()
    return(
      <span>{reviewItems.filter(item=>!item.isReviewed).length}/{reviewItems.length}</span>
    )
    }
    export default ReviewCounter