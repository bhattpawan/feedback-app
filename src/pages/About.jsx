import { Link } from 'react-router-dom';
import Card from '../Components/Shared/Card';

const About = () => {
  return (
    <section className='about'>
      <Card>
        <h1 style={{ paddingBottom: '10px' }}>About This Project</h1>
        <p>This is a react app which enables a user to leave their feedback.</p>
        <p>We can use this app as a micro-app and embed in any of the exsting apps.</p>
        <p>Created as a part of React 2022 course by Brad Traversy.</p>
        <p>
          Find the course&nbsp;
          <a
            href='https://www.udemy.com/course/react-front-to-back-2022/'
            target='_blank'
            rel='noopener no referrer'
          >
            here
          </a>
        </p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </Card>
    </section>
  );
};

export default About;
