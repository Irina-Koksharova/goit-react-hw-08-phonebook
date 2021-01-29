import PropTypes from 'prop-types';

const Container = ({ style, children }) => {
  return <div style={style}>{children}</div>;
};

Container.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default Container;
