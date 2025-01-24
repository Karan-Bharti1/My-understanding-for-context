import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './components/Nav'
import ReviewContext from './contexts/ReviewContext'

function Reporting() {
const {initialItems}=useContext(ReviewContext)

  return (
    <>
      <Nav  />
      <hr/>
      <main className='container'>
      <h1>status ({initialItems.length})</h1>
      <hr/>
      <h2>Pending:</h2>
      <p className='fs-2'>{initialItems.filter(item=>!item.isReviewed).length}</p>
      <hr/>
      <h2>Reviewed:</h2>
      <p className='fs-2'>{initialItems.filter(item=>item.isReviewed).length}</p>
      </main>
      
    </>
  )
}

export default Reporting
