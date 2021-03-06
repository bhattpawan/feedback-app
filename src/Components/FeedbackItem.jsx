import Card from './Shared/Card';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='#ddd' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
