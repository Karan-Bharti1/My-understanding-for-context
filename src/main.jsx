import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Pending from './pages/Pending.jsx'
import Reporting from './App.jsx'
const router=createBrowserRouter([
  {path:"/",
  element:<Reporting/>
  },
  {
    path:"/pending",
    element:<Pending/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
