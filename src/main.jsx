import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Pending from './pages/Pending.jsx';
import Reporting from './App.jsx';
import ReviewContext from './contexts/ReviewContext.jsx';

// Initial review items
const initialReviewItems = [
  {
    url: 'https://github.com/repo1',
    isReviewed: false,
  },
  {
    url: 'https://github.com/repo2',
    isReviewed: false,
  },
  {
    url: 'https://github.com/repo3',
    isReviewed: true,
  },
];

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
]);

// Main App Component
const App = () => {
  const [reviewItems, setReviewItems] = useState(initialReviewItems);

  // Toggle review status for an item
  const toggleReview = (url) => {
    setReviewItems((prevItems) =>
      prevItems.map((item) =>
        item.url === url ? { ...item, isReviewed: !item.isReviewed } : item
      )
    );
  };

  return (
    <StrictMode>
      <ReviewContext.Provider value={{ initialItems:reviewItems }}>
        {/* Display list of review items */}
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

        {/* Router provider */}
        <RouterProvider router={router} />
      </ReviewContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
