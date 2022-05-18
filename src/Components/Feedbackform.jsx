import { useState } from 'react';
import Card from './Shared/Card';

const Feedbackform = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    let val = e.target.value;
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
          <button className='btn btn-secondary' type='submit'>
            Send
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Feedbackform;
