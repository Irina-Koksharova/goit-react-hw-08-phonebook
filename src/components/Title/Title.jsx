import PropTypes from 'prop-types';

const Title = ({ children, style }) => {
  return <h1 style={style}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

export default Title;
