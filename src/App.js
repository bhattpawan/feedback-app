import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import Feedbackform from './Components/Feedbackform';
import About from './pages/About';
import AboutIcon from './Components/AboutIcon';

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
    <Router>
      <Header headerText='FeedBack App' />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <Feedbackform handleAdd={handleAdd} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
              </>
            }
          ></Route>
          <Route path='/about' element={<About />} />
        </Routes>
        <AboutIcon /> 
      </div>
    </Router>
  );
}

export default App;
