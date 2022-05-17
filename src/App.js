import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './Data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (itemId) => {
    const updated = feedback.filter((item) => {
      return item.id !== itemId;
    });
    setFeedback(updated);
  };

  return (
    <>
      <Header headerText='FeedBack App' />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
