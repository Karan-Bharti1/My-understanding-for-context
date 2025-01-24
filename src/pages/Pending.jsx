import { useContext } from "react";
import Nav from "../components/Nav"
import ReviewContext, { useReviewContext } from "../contexts/ReviewContext";

const Pending=()=>{
    const {initialItems}=useReviewContext()
return(
    <>
    <Nav/>
    <hr/>
    <main className="container">
        <h1>pending</h1>
    </main>
    </>
)
}
export default Pending;