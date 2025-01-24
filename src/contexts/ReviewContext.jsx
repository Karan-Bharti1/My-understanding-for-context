import { createContext,useState,StrictMode, useContext } from "react";
const ReviewContext=createContext();


export const useReviewContext=()=>useContext(ReviewContext)
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
export function ReviewProvider({children}){
    const [reviewItems, setReviewItems] = useState(initialReviewItems);
  
    // Toggle review status for an item
    const toggleReview = (url) => {
      setReviewItems((prevItems) =>
        prevItems.map((item) =>
          item.url === url ? { ...item, isReviewed: !item.isReviewed } : item
        )
      );
    };
   return ( <StrictMode>
    <ReviewContext.Provider value={{ reviewItems,toggleReview }}>
      
  {children}
    </ReviewContext.Provider>
  </StrictMode>)
  }

export default useReviewContext;