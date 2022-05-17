import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './Data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header headerText='FeedBack App' />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
