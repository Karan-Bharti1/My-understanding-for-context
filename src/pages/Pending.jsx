import { useContext } from "react";
import Nav from "../components/Nav"
import ReviewContext from "../contexts/ReviewContext";

const Pending=()=>{
    const {initialItems}=useContext(ReviewContext)
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