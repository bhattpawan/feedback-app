import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIcon = () => {
  return (
    <section className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </section>
  );
};

export default AboutIcon;
