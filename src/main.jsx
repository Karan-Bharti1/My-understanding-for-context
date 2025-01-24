import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Pending from './pages/Pending.jsx'
import Reporting from './App.jsx'
import ReviewContext from './contexts/ReviewContext.jsx'
const initialReviewItems=[{
  url:"https://github.com/repo1",
  isReviewd:false
},
{
  url:"https://github.com/repo2",
  isReviewd:false
}]
const router=createBrowserRouter([
  {path:"/",
  element:<Reporting/>
  },
  {
    path:"/pending",
    element:<Pending/>
  }
])
createRoot(document.getElementById('root')).render(//wrapped whole app inside the ReviewContext
  <StrictMode>
    <ReviewContext.Provider value={{initialItems:initialReviewItems}}>
   <RouterProvider router={router}/>
   </ReviewContext.Provider>
  </StrictMode>,
)
