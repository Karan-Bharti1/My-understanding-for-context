import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Pending from './pages/Pending.jsx';
import Reporting from './App.jsx';

import Review from './pages/Review.jsx';
import { ReviewProvider } from './contexts/ReviewContext.jsx';



// Define router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Reporting />,
  },
  {
    path: '/pending',
    element: <Pending />,
  },
  {
    path:'/review',
    element:<Review/>
  }
]);


// Main App Component
const App = () => {
  return (
    <StrictMode>
      <ReviewProvider >
        <RouterProvider router={router} />
      </ReviewProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
