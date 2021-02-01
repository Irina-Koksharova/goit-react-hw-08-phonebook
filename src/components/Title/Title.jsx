import PropTypes from 'prop-types';

const Title = ({ style, children }) => {
  return <h1 style={style}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
};

export default Title;
