import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import Feedbackform from './Components/Feedbackform';
import About from './pages/About';
import AboutIcon from './Components/AboutIcon';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header headerText='FeedBack App' />
        <main className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <Feedbackform />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
