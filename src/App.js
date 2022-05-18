import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import Feedbackform from './Components/Feedbackform';

function App() {
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
    <>
      <Header headerText='FeedBack App' />
      <div className='container'>
        <Feedbackform handleAdd={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
