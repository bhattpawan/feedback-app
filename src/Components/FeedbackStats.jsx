import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // Calculate total number of reviews
  const count = feedback.length;
  // Calculate average
  const sum = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);

  let average = (sum / count).toFixed(1).replace(/[.,]0$/, '');
  average = isNaN(average) ? 0 : average;

  return (
    <section className='feedback-stats'>
      <h4>{count} reviews</h4>
      <h4>Average Rating: {average}</h4>
    </section>
  );
};

export default FeedbackStats;
