import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';

const Feedbackform = () => {
  const [text, setText] = useState('');
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

  return (
    <Card>
      <form>
        <h2>Your feedback helps us serve you better</h2>
        {/* To do - Rating Select Component */}
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
