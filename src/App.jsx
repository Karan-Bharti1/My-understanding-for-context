import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './components/Nav'
import  { useReviewContext } from './contexts/ReviewContext'

function Reporting() {
const {reviewItems}=useReviewContext()

  return (
    <>
      <Nav  />
      <hr/>
      <main className='container'>
      <h1>status ({reviewItems.length})</h1>
      <hr/>
      <h2>Pending:</h2>
      <p className='fs-2'>{reviewItems.filter(item=>!item.isReviewed).length}</p>
      <hr/>
      <h2>Reviewed:</h2>
      <p className='fs-2'>{reviewItems.filter(item=>item.isReviewed).length}</p>
      </main>
      
    </>
  )
}

export default Reporting
