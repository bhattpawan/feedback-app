import { createContext, useState } from 'react';
import FeedbackData from '../Data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (itemId) => {
    const updated = feedback.filter((item) => {
      return item.id !== itemId;
    });
    setFeedback(updated);
  };

  const handleAdd = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, handleDelete, handleAdd }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
