import { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './Shared/RatingSelect';

const Feedbackform = () => {
  const { handleAdd } = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    let val = e.target.value;
    if (val.trim().length === 0) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (val.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be ateast 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text: text, rating: rating };
      handleAdd(newFeedback);
      setText('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Your feedback helps us serve you better</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='How can we serve you better?'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
