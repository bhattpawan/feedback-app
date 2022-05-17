import PropTypes from 'prop-types';

const Header = ({ headerText }) => {
  return (
    <header>
      <div className='container'>
        <h2>{headerText}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  headerText: 'FeedBack App',
};

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
