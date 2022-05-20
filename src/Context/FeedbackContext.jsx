import { createContext, useState } from 'react';
import FeedbackData from '../Data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackContext.Provider value={{ feedback: feedback }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
