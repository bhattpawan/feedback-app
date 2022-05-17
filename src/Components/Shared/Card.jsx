import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  return <section className={`card ${reverse && 'reverse'}`}>{children}</section>;
};

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
